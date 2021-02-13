<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex text-center align-items-center justify-content-center py-2">
        <!-- make this match the homepage where it says Room-Me -->
        <h2>
          Welcome to the matches page, home of your future RoomMe!
        </h2>
      </div>
    </div>
    <div class="row">
      <MatchDetailsComponent v-for="match in matches" :key="match.id" :match-props="match" />
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
