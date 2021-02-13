<template>
  <div class="container demo">
    <div class="row demo__content">
      <div class="demo__card-cont">
        <PotentialMatchesComponent v-for="profile in state.profiles" :key="profile.id" :profile-props="profile" />
      </div>
    </div>
    <div class="demo__tip">
    </div>
  </div>
  <!-- <div class="container-fluid border">
    <div class="row">
      <div class="col">
        <h1 class="text-center">
          RoomMe Machine
        </h1>
        <div id="swipeMe">
          Swipe Me!
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div id="carouselExampleControls" class="carousel slide" data-ride="false" data-touch="true" data-interval="false">
        <div id="carousel" class="carousel-inner">
          <div id="12345" class="carousel-item active">
            <h1 class="text-center py-5">
              <img class="d-block w-100" src="" alt="Slide to begin">
            </h1>
            <i class="carousel-control-next btn fa fa-thumbs-up text-success text-right" role="button" href="#carouselExampleControls" aria-hidden="true" data-slide="next"></i>
          </div>
          <PotentialMatchesComponent v-for="profile in profiles" :key="profile.id" :profile-props="profile" />
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { profileService } from '../services/ProfileService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
// import swipedetect from '../utils/SwipeHandler'
import $ from 'jquery'
import { matchService } from '../services/MatchService'
export default {
  name: 'SearchPage',
  setup() {
    $(document).ready(function() {
      let animating = false
      let cardsCounter = 0
      const numOfCards = 100
      const decisionVal = 80
      let pullDeltaX = 0
      let deg = 0
      let $card, $cardReject, $cardLike

      function pullChange() {
        animating = true
        deg = pullDeltaX / 10
        $card.css('transform', 'translateX(' + pullDeltaX + 'px) rotate(' + deg + 'deg)')

        const opacity = pullDeltaX / 100
        const rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity)
        const likeOpacity = (opacity <= 0) ? 0 : opacity
        $cardReject.css('opacity', rejectOpacity)
        $cardLike.css('opacity', likeOpacity)
      };

      function release() {
        if (pullDeltaX >= decisionVal) {
          $card.addClass('to-right')
          console.log('liked')
          console.log('is this what i want', $card[0].id)
          try {
            matchService.like($card[0].id)
          } catch (error) {
            logger.log(error)
          }
        } else if (pullDeltaX <= -decisionVal) {
          $card.addClass('to-left')
          console.log('disliked')
        }

        if (Math.abs(pullDeltaX) >= decisionVal) {
          $card.addClass('inactive')

          setTimeout(function() {
            $card.addClass('below').removeClass('inactive to-left to-right')
            cardsCounter++
            if (cardsCounter === numOfCards) {
              cardsCounter = 0
              $('.demo__card').removeClass('below')
            }
          }, 300)
        }

        if (Math.abs(pullDeltaX) < decisionVal) {
          $card.addClass('reset')
        }

        setTimeout(function() {
          $card.attr('style', '').removeClass('reset')
            .find('.demo__card__choice').attr('style', '')

          pullDeltaX = 0
          animating = false
        }, 300)
      };

      $(document).on('mousedown touchstart', '.demo__card:not(.inactive)', function(e) {
        if (animating) return

        $card = $(this)
        $cardReject = $('.demo__card__choice.m--reject', $card)
        $cardLike = $('.demo__card__choice.m--like', $card)
        const startX = e.pageX || e.originalEvent.touches[0].pageX

        $(document).on('mousemove touchmove', function(e) {
          const x = e.pageX || e.originalEvent.touches[0].pageX
          pullDeltaX = (x - startX)
          if (!pullDeltaX) return
          pullChange()
        })

        $(document).on('mouseup touchend', function() {
          $(document).off('mousemove touchmove mouseup touchend')
          if (!pullDeltaX) return // prevents from rapid click events
          release()
        })
      })
    })
    const state = reactive({
      account: computed(() => AppState.account),
      profiles: computed(() => AppState.profiles.filter(p => p.id !== state.account.id))
    })
    onMounted(async() => {
      try {
        // console.log('teehee')
        await profileService.getProfiles()
      } catch (error) {
        logger.log(error)
      }
      // try {
      //   await profileService.getProfile()
      // } catch (error) {
      //   logger.log(error)
      // }
      // swipedetect(document.getElementById('carousel'), dir => {
      //   console.log(dir, 'swiping')
      //   console.log(document.getElementsByClassName('carousel-item active')[0].id)
      // })
    })
    return {
      state,
      matchLike(matchId) {
        console.log('passed to method', matchId)
        // matchService.like(matchId)
      }
      // onSwipeLeft() {
      //   console.log('swiping left')
      // }

    }
  }
}

</script>
<style lang="scss" scoped>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-size: 62.5%;
}
body {
  background: #63BDF7;
  overflow: hidden;
}
// 30.6rem
$w: 30.6rem;
$h: 54rem;
$headerH: 6rem;
$cardW: 28rem;
$cardH: 32rem;
$cardTopH: 20.5rem;
$cardBtmH: $cardH - $cardTopH;
$imgSize: 10rem;

$purple: #7132B9;
$blue: #248CB6;
$indigo: #303F9F;
$cyan: #26C6DA;
$lime: #AFB42B;
$brown: #795548;

$orange: #FF945A;
$green: #B1DA96;

.demo {
  position: absolute;
  left: 50%;
  top: 50%;
  width: $w;
  height: $h;
  margin-left: $w/-2;
  margin-top: $h/-2;
  background: #F6F6F5;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);

  &__header {
    height: $headerH;
    background: #002942;
  }

  &__content {
    // overflow: hidden;
    position: relative;
    height: $h - $headerH;
    padding-top: 1rem;
    user-select: none;
  }

  &__card-cont {
    position: relative;
    width: $cardW;
    height: $cardH;
    margin: 0 auto 5rem;
  }

  &__card {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: 50% 100%;

    &.reset {
      transition: transform 0.3s;
      transform: translateX(0) !important;

      .demo__card__choice {
        transition: opacity 0.3s;
        opacity: 0 !important;;
      }
    }

    &.inactive {
      transition: transform 0.3s;
    }

    &.to-left {
      transform: translateX(-30rem) rotate(-30deg) !important;
    }

    &.to-right {
      transform: translate(30rem) rotate(30deg) !important;
    }

    &.below {
      z-index: 1;
    }

    &__top {
      height: $cardTopH;
      padding-top: 4rem;

      &.purple {
        background: $purple;
      }
      &.blue {
        background: $blue;
      }
      &.indigo {
        background: $indigo;
      }
      &.cyan {
        background: $cyan;
      }
      &.lime {
        background: $lime;
      }
      &.brown {
        background: $brown;
      }
    }

    &__img {
      overflow: hidden;
      width: $imgSize;
      height: $imgSize;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      border: 0.5rem solid #ffffff;
      background-image: url('//s3-us-west-2.amazonaws.com/s.cdpn.io/142996/profile/profile-512_5.jpg');
      background-size: cover;
    }

    &__name {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
    }

    &__btm {
      height: $cardBtmH;
      background: #FFFFFF;
    }

    &__we {
      text-align: center;
      font-size: 2.2rem;
      line-height: $cardBtmH;
    }

    &__choice {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;

      &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 2rem;
        height: 2rem;
        margin-left: -1rem;
        color: #fff;
        border-radius: 50%;
        box-shadow: -2rem -3rem #fff, 2rem -3rem #fff;
      }

      &:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 4rem;
        height: 1.5rem;
        margin-left: -2rem;
        border: 0.6rem solid #fff;
        border-bottom: none;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
      }

      &.m--reject {
        background: $orange;
      }
      &.m--like {
        background: $green;

        &:after {
          transform: scaleY(-1);
        }
      }
    }

    &__drag {
      z-index: 5;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      cursor: grab;
    }
  }

  &__tip {
    text-align: center;
    font-size: 2.2rem;
  }
}

</style>
