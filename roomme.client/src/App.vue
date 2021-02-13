<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <!-- <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div> -->
    <div class="container-fluid bg-dark p-4">
      <div class="row text-light text-center">
        <div class="col-3">
          <a>San Diego</a>
        </div>
        <div class="col-3">
          <a>Boise</a>
        </div>
        <div class="col-3">
          <a>Naples</a>
        </div>
        <div class="col-3">
          <a>Moscow</a>
        </div>
        <div class="col-3">
          <a>New York</a>
        </div>
        <div class="col-3">
          <a>Portland</a>
        </div>
        <div class="col-3">
          <a>Seattle</a>
        </div>
        <div class="col-3">
          <a>Detroit</a>
        </div>
        <div class="col-3">
          <a>Philadelphia</a>
        </div>
        <div class="col-3">
          <a>Dallas</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
