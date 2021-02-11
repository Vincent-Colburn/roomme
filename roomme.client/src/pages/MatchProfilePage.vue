<template>
  <h1>{{ state.profile.name }}</h1>
  <img :src="state.profile.imgURL" alt="">
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
