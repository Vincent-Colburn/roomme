<template>
  <div :id="profileProps.id" class="demo__card bg-primary">
    <div>
      <img class="demo__card__top img-fluid" :src="profileProps.imgURL">
      <p class="demo__card__name">
        {{ profileProps.name }}
      </p>
    </div>
    <div class="demo__card__btm bg-light position-absolute all-0 d-flex flex-column w-100 h-100" style="overflow-y:scroll" id="msgWrap">
      <span> <b>Age: </b> {{ profileProps.age }} | <b>  Gender: </b> {{ profileProps.gender }} | <b>Monthly Budget: </b> {{ profileProps.lowPriceRange }} - {{ profileProps.highPriceRange }} </span>
      <p>
        <b>About Me: </b>
        <span>
          {{ profileProps.aboutMe }}
        </span>
      </p>
      <p>
        <b>Interests: </b>
        <span>
          {{ profileProps.interests }}
        </span>
      </p>
    </div>
    <div class="demo__card__choice m--reject"></div>
    <div class="demo__card__choice m--like"></div>
    <div class="demo__card__drag"></div>
  </div>
  <!-- <div :id="profileProps.id" class="carousel-item">
    <div class="row">
      <div class="col mx-5 py-5">
        <i class="carousel-control-next  btn fa fa-thumbs-down text-danger text-left"
           role="button"
           href="#carouselExampleControls"
           aria-hidden="true"
           data-slide="next"
           @click="matchDislike()"
        ></i>
      </div>
      <div class="col mx-5 py-5">
        <i class="carousel-control-next btn fa fa-thumbs-up text-success text-right"
           role="button"
           href="#carouselExampleControls"
           aria-hidden="true"
           data-slide="next"
           @click="matchLike()"
        ></i>
      </div>
    </div>
    <div class="row">
      <div class="offset-2 col-2">
        <img :src="profileProps.imgURL" class="img-fluid" alt="">
      </div>
      <div class="col water offset-1">
        <div class="row my-2">
          <div class="col">
            <h3>Name: {{ profileProps.name }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Age: {{ profileProps.age }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Gender: {{ profileProps.gender }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Interests: {{ profileProps.interests }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Price range: {{ profileProps.lowPriceRange }} - {{ profileProps.highPriceRange }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col"></div>
      <div class="col-9">
        <h4>About Me:</h4>
        <p>{{ profileProps.aboutMe }}</p>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col-9">
        <h4>
          Lifestyle Choices:
        </h4>
        <p>
          {{ profileProps.lifestyleOptions }}
        </p>
      </div>
      <div class="col"></div>
    </div>
  </div> -->
</template>

<script>
// import $ from 'jquery'
// $('.carousel').carousel({
//   interval: false,
//   wrap: false
// })
export default {
  name: 'PotentialMatchesComponent',
  props: {
    profileProps: { type: Object, required: true }
  }
}

// $(document).ready(function() {
//   // Fill the message and friend containers.

//   for (let i = 0; i < 30; i++) {
//     $('#msgWrap').append(`<div class="demo__card__btm position-absolute all-0 d-flex flex-column w-100 h-100" style="overflow-y:scroll" id="msgWrap">
//       <p>
//         + i +
//       </p>
//     </div>`)

//     // $('#msgWrap').append("<div class='text-primary'>Message " + i + '</div>')
//   }
// })
// $(document).ready(function() {
//   // Carousel

//   $('.carousel').carousel({
//     interval: false,
//     pause: true
//   })

//   $('.carousel .carousel-inner').swipe({
//     swipeLeft: function(event, direction, distance, duration, fingerCount) {
//       this.parent().carousel('next')
//     },
//     swipeRight: function() {
//       this.parent().carousel('prev')
//     },
//     threshold: 0,
//     tap: function(event, target) {
//       window.location = $(this).find('.carousel-item.active a').attr('href')
//     },
//     excludedElements: 'label, button, input, select, textarea, .noSwipe'
//   })

//   $('.carousel .carousel-inner').on('dragstart', 'a', function() {
//     return false
//   })
// })
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

$w: 30.6rem;
$h: 54rem;
$headerH: 6rem;
$cardW: 24rem;
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
    overflow: hidden;
    position: relative;
    height: $h - $headerH;
    padding-top: 4.5rem;
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
      display: block;
      width: auto;
      height: auto;
      max-height: 450px;
      background-image: url("../assets/img/rm-logo2.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

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
