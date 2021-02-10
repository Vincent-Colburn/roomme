<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <MatchDetailsPage />
      </div>
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
      matches: computed(() => AppState.matches),
      account: computed(() => AppState.account)
    })
    onMounted(async() => {
      try {
        await matchService.getMatches()
      } catch (error) {
        logger(error)
      }
    })
    return state
  }
}
</script>
<style lang="scss" scoped>

</style>
