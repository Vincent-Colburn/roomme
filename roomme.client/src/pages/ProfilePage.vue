<template>
  <div class="profile container-fluid">
    <div class="row text-center my-3">
      <div class="col">
        <h1>WELCOME ThE ThUnDer dOMe!</h1>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal">
          Edit Profile
        </button>
      </div>
    </div>
    <div class="row">
      <div class="offset-2 col-2">
        <img :src="state.profile.imgUrl" class="img-fluid" alt="">
      </div>
      <div class="col water offset-1">
        <div class="row my-2">
          <div class="col">
            <h3>Name: {{ state.profile.name }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Age: {{ state.profile.age }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Gender: {{ state.profile.gender }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Interests: {{ state.profile.interests }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Price range: {{ state.profile.priceRange }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col"></div>
      <div class="col-9">
        <h4>About Me:</h4>
        <p>{{ state.profile.aboutMe }}</p>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col-9">
        <h4>
          Lifestyle Choices:
        </h4>
        <p>
          {{ state.profile.lifestyleOptions }}
        </p>
      </div>
      <div class="col"></div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade"
       id="editModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img src="https://4rfnv3jdfte8qj2229aqgj4h-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15610552_web1_Cull2-Sealion-20feb19-1024x683.jpg" class="img-fluid" alt="">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Profile',
  setup() {
    const state = reactive({
      profile: computed(() => AppState.myProfile)
    })
    return {
      state
    }
  }
}
</script>
<style lang="scss" scoped>
  // .water{
  //   background-image: url("../assets/img/rm-logo.png");
  // }
</style>
