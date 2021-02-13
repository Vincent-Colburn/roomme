<template>
  <div class="col-md-3 mt-5 container-fluid mx-">
    <div class="card h-200" v-if="matchProps.fromUserId.id !== state.account.id" style="width: 18rem;">
      <img class=" img-fluid" :src=" matchProps.fromUserId.imgURL" alt="Card image cap">
      <div class="card-body cbody  bg-secondary">
        <!-- <img class="buttonimg img-fluid card-img-top" src="../assets/img/rm-logo.png" atl="Card image cap"> -->
        <div class="card-title">
          <div class="row">
            <div class="col-8 d-flex  text-white">
              <span class="mx-0"> <b>Name: </b>  {{ matchProps.fromUserId.name }}</span>
            </div>
            <div class="col-4 d-flex text-white">
              <span class="mx-0"> <b>Age: </b>{{ matchProps.fromUserId.age }}</span>
            </div>
          </div>
        </div>
        <p class="card-text text-white ">
          <a> <b>Monthly Budget:</b> $ {{ matchProps.fromUserId.lowPriceRange }} - $ {{ matchProps.fromUserId.highPriceRange }} </a>
        </p><p class="card-text text-center">
          <router-link :to="{ name: 'MatchProfile', params: {id: matchProps.fromUserId.id} }">
            <button class="btn btn-button profileButton">
              View full Profile
            </button>
          </router-link>
        </p>
      </div>
    </div>
    <div class="card h-200" v-if="matchProps.toUserId.id !== state.account.id" style="width: 18rem;">
      <img class=" img-fluid" :src=" matchProps.toUserId.imgURL" alt="Card image cap">
      <div class="card-body cbody  bg-secondary">
        <!-- <img class="buttonimg img-fluid card-img-top" src="../assets/img/rm-logo.png" atl="Card image cap"> -->
        <div class="card-title">
          <div class="row">
            <div class="col-8 d-flex  text-white">
              <span class="mx-0"> <b>Name: </b>  {{ matchProps.toUserId.name }}</span>
            </div>
            <div class="col-4 d-flex text-white">
              <span class="mx-0"> <b>Age: </b>{{ matchProps.toUserId.age }}</span>
            </div>
          </div>
        </div>
        <p class="card-text text-white ">
          <a> <b>Monthly Budget:</b> $ {{ matchProps.toUserId.lowPriceRange }} - $ {{ matchProps.toUserId.highPriceRange }} </a>
        </p><p class="card-text text-center">
          <router-link :to="{ name: 'MatchProfile', params: {id: matchProps.toUserId.id} }">
            <button class="btn btn-button profileButton">
              View full Profile
            </button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'MatchDetailsComponent',
  props: {
    matchProps: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  // max-width: 300px;
  max-height: 200px
}
p {
  padding: 0;
}

.cbody {
  display: block;
  width: auto;
  height: auto;
  background-image: url("../assets/img/rm-logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.profileButton {
  // this is a maybe for buttons
  background:  #08e6fad3;
  // background:  #fa0830d3;
}

// .buttonimg {
//   width: 100%;
//   height: 30px
// }
</style>
