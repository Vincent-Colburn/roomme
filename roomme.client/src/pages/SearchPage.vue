<template>
  <div class="container-fluid border">
    <div class="row">
      <div class="col">
        <h1 class="text-center">
          RoomMe Machine
        </h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div id="carouselExampleControls" class="carousel slide" data-ride="false" data-interval="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h1 class="text-center py-5">
              slide to begin
            </h1>
            <i class="carousel-control-next  btn fa fa-thumbs-down text-danger text-left" role="button" href="#carouselExampleControls" aria-hidden="true" data-slide="next"></i>
            <i class="carousel-control-next btn fa fa-thumbs-up text-success text-right" role="button" href="#carouselExampleControls" aria-hidden="true" data-slide="next"></i>
          </div>
          <PotentialMatchesComponent v-for="profile in state.profiles" :key="profile.id" :profile-props="profile" />
        </div>
      </div>
    </div>
  </div>
  <!-- <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="next" @click="matchDislike()">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" @click="matchLike()">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span> -->
  <!-- </a> -->

  <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> -->
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { profileService } from '../services/ProfileService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'SearchPage',
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account),
      profiles: computed(() => AppState.profiles)
    })
    onMounted(async() => {
      try {
        console.log('teehee')
        await profileService.getProfiles()
      } catch (error) {
        logger.log(error)
      }
      try {
        await profileService.getProfile()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      state
    }
  }
}
</script>
