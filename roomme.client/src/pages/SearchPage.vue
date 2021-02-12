<template>
  <div class="container-fluid border">
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
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { profileService } from '../services/ProfileService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import swipedetect from '../utils/SwipeHandler'
export default {
  name: 'SearchPage',
  setup() {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    onMounted(async() => {
      try {
        // console.log('teehee')
        await profileService.getProfiles()
      } catch (error) {
        logger.log(error)
      }
      try {
        await profileService.getProfile()
      } catch (error) {
        logger.log(error)
      }
      swipedetect(document.getElementById('carousel'), dir => {
        console.log(dir, 'swiping')
        console.log(document.getElementsByClassName('carousel-item active')[0].id)
      })
    })
    return {
      state,
      profiles: computed(() => AppState.profiles.filter(p => p.id !== state.account.id)),
      onSwipeLeft() {
        console.log('swiping left')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
