<template>
  <div class="profile container-fluid background" v-if="state.profile.name">
    <div class="row text-center my-3">
      <div class="col">
        <h1>Profile Details For: <span class="primary">{{ state.profile.name }}</span></h1>
      </div>
    </div>
    <div class="row">
      <div class="offset- col-5">
        <img :src="state.profile.imgURL" class="img-fluid" alt="">
      </div>
      <div class="col water">
        <div class="row my-2">
          <div class="col">
            <h3><span class="primary">Age:</span> {{ state.profile.age }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3><span class="primary">Gender:</span> {{ state.profile.gender }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3><span class="primary">Monthly Budget:</span>   ${{ state.profile.lowPriceRange }} -  ${{ state.profile.highPriceRange }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3><span class="primary">Anticipated Move-in  Date:</span>  {{ state.profile.anticipatedMoveInDate }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <!-- <div class="col"></div> -->
      <div class="offset-2 col-6">
        <h4 class="primary">
          About Me:
        </h4>
        <h5>{{ state.profile.aboutMe }}</h5>
      </div>
      <!-- <div class="col"></div> -->
    </div>
    <div class="row my-5">
      <div class=" offset-2 col-6">
        <h3 class="primary">
          Interests
        </h3>
        <h5>{{ state.profile.interests }} </h5>
      </div>
    </div>
    <div class="row">
      <!-- <div class="col"></div> -->
      <div class="offset-2 col-6">
        <h4 class="primary">
          Lifestyle Choices:
        </h4>
        <h5>
          {{ state.profile.lifestyleOptions }}
        </h5>
      </div>
      <!-- <div class="col"></div> -->
    </div>
  </div>
</template>
<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { matchService } from '../services/MatchService'
import { useRoute } from 'vue-router'
export default {
  name: 'MatchProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      profile: computed(() => AppState.activeMatch)
    })
    onMounted(async() => {
      try {
        await matchService.getMatchProfile(route.params.id)
      } catch (error) {
        logger(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
.water{
    background-image: url("../assets/img/rm-logo3.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    margin-right: 5em;
    position: relative;
  }
  .water::before {
    background-color: rgba(0,0,0,0.75);
    position: absolute;
  }
  .home{
  height: 50%;
}
.primary{
  color: #2f81d3;
}
.secondary{
  color: #1e6096;
}
.tertiary {
  color: #d87ae6;
}
.primary-background {
  background-color: #2f81d3;
  color: white;
}
.secondary-background {
  background-color: #1e6096;
}
.tertiary-background {
  background-color: #d87ae6;
}
.text {
  color: white;
}
.color {
  color: #bff5f0;
}
.btn:hover {
  background-color: #1e6096;
}
.very-light-blue {
  background-color: #deeaee;
}
.container-fluid {
  background-color: #FFFAFA;
  /* background-color: #edf7F6 */
}
.background {
background-image: linear-gradient(white, #e6fff7);
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-position: center;
}

</style>
