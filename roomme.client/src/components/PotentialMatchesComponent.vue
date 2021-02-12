<template>
  <div :id="profileProps.id" class="carousel-item">
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
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
// import $ from 'jquery'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import { matchService } from '../services/MatchService'
// $('.carousel').carousel({
//   interval: false,
//   wrap: false
// })
export default {
  name: 'PotentialMatchesComponent',
  props: {
    profileProps: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account),
      myProfile: computed(() => AppState.myProfile)
    })
    return {
      state,
      matchDislike() {
        profileService.dislike(state.myProfile.id, props.profileProps.id)
      },

      matchLike() {
        matchService.like(props.profileProps.id)
      }
    }
  }
}

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

</style>
