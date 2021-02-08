<template>
  <div class="container-fluid">
    <div class="row text-center my-5">
      <div class="col">
        <h1><i class="fas fa-people-arrows"></i> RoomMe</h1>
      </div>
    </div>
    <div class="row text-center">
      <div class="col">
        <h5>An interactive to fascilitate finding a roommate with similar lifestyle and interests, increasing the chances of finding a lifelong friend.</h5>
      </div>
    </div>
    <div class="row text-center my-5">
      <div class="col">
        <h3> Log in to start looking for RoomMe's</h3>
      </div>
    </div>
    <div class="row home align-content-center text-center">
      <div class="col">
        <router-link :to="{ name: 'Profile' }">
          <button class="btn border shadow">
            Profile
          </button>
        </router-link>
        <router-link :to="{ name: 'Search' }">
          <button class="btn border offset-1 shadow">
            Start Searching
          </button>
        </router-link>
      </div>
    </div>
    <!-- <div class="row bg-dark text-light text-center">
      <div class="col-4">
        <a>San Diego</a>
      </div>
    </div> -->
    <div>
      <div class="row text-center">
        <div class="col">
          <h3>Matches found: "INSERT HERE"</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  height: 50%;
}

</style>
