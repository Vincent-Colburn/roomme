<template>
  <div class="col-3 mt-5">
    <div class="card h-100" v-if="matchProps.fromUserId.id !== state.account.id">
      <img class="card-img-top" :src=" matchProps.fromUserId.imgURL" alt="">
      <div class="card-body">
        <h4 class="card-title">
          <h3>From user: {{ matchProps.fromUserId.name }}</h3>
        </h4>
        <p class="card-text">
          <router-link :to="{ name: 'MatchProfile', params: {id: matchProps.fromUserId.id} }">
            <button class="btn btn-primary">
              Go to Profile
            </button>
          </router-link>
        </p>
      </div>
    </div>
    <div class="card h-100" v-if="matchProps.toUserId.id !== state.account.id">
      <img class="card-img-top" :src=" matchProps.toUserId.imgURL" alt="">
      <div class="card-body">
        <h4 class="card-title">
          <h3>From user: {{ matchProps.toUserId.name }}</h3>
        </h4>
        <p class="card-text">
          <router-link :to="{ name: 'MatchProfile', params: {id: matchProps.toUserId.id} }">
            <button class="btn btn-primary">
              Go to Profile
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

</style>
