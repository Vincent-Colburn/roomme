<template>
  <div class="container-fluid">
    <div class="row text-center my-5">
      <div class="col">
        <h1><i class="fas fa-people-arrows text-primary"></i> <span class="primary">Room</span><span class="tertiary">&middot;</span><span class="secondary">Me</span></h1>
      </div>
    </div>
    <div class="row text-center">
      <div class="col">
        <h5 class="text">
          An interactive app to facilitate finding a roommate with similar <span class="color">lifestyles</span> and <span class="color">interests</span>, increasing the chances of finding a lifelong <span class="color">friend!</span>
        </h5>
      </div>
    </div>
    <div class="row text-center my-5">
      <div class="col">
        <h3 class="text">
          Login to start looking for <span class="dotted">Room&middot;Me's</span>
        </h3>
      </div>
    </div>
    <div class="row home align-content-center text-center">
      <div class="col">
        <router-link :to="{ name: 'Profile' }">
          <button class="btn shadow primary-background">
            Your Profile
          </button>
        </router-link>
        <router-link :to="{ name: 'Search' }">
          <button class="btn offset-1 shadow primary-background">
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
          <h3 class="text">
            Matches found: <span class="color">"INSERT HERE"</span>
          </h3>
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
  height: 23%;
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
.dotted {
  border-bottom: 4px dotted #d87ae6;
}
.btn:hover {
  background-color: #1e6096;
}

.container-fluid {
  background-image: url("https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  min-height: 100vh;
  // background-color: #FFFAFA;
  // background-color: #edf7F6
}

</style>
