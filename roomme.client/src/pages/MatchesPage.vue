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
import { profileService } from '../services/ProfileService'
export default {
  name: 'MatchesPage',
  setup() {
    const state = reactive({
      matches: computed(() => AppState.matches),
      myProfile: computed(() => AppState.myProfile),
      account: computed(() => AppState.account)
    })
    onMounted(() => {
      try {
        profileService.getProfile()
      } catch (error) {
        logger.log(error)
      } finally {
        matchService.getMatches(state.myProfile.id)
      }
    })
    return state
  }
}
</script>
<style lang="scss" scoped>

</style>
