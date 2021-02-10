<template>
  <div class="container-fluid">
    <div class="row">
      <MatchDetailsComponent v-for="match in matches" :key="match.id" :match-props="match" />
      <h1> </h1>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, reactive } from 'vue'
import { matchService } from '../services/MatchService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
// import { profileService } from '../services/ProfileService'
export default {
  name: 'MatchesPage',
  setup() {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    onMounted(async() => {
      try {
        await matchService.getMatches()
      } catch (error) {
        logger(error)
      }
    })
    return {
      state,
      matches: computed(() => AppState.matches)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
