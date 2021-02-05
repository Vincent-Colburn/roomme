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
        <img :src="profile.imgUrl" class="img-fluid" alt="">
      </div>
      <div class="col water offset-1">
        <div class="row my-2">
          <div class="col">
            <h3>Name: {{ profile.name }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Age: {{ profile.age }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Gender: {{ profile.gender }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Interests: {{ profile.interests }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3>Price range: {{ profile.priceRange }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col"></div>
      <div class="col-9">
        <h4>About Me:</h4>
        <p>{{ profile.aboutMe }}</p>
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
          {{ profile.lifestyleOptions }}
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
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Edit Profile
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit="editProfile">
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" class="form-control" v-model="profile.name">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="exampleInputPassword1">Age</label>
                  <input type="number" class="form-control" v-model="profile.age">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Gender</label>
              <input type="string" class="form-control" v-model="profile.gender">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Zip Code</label>
              <input type="string" class="form-control" v-model="profile.location">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">About Me</label>
              <textarea class="form-control" v-model="profile.aboutMe" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Looking For</label>
              <input type="string" class="form-control" v-model="profile.lookingFor">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Price Range</label>
              <input type="string" class="form-control" v-model="profile.priceRange">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Interests</label>
              <input type="string" class="form-control" v-model="profile.interests">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Lifestyle Options</label>
              <input type="string" class="form-control" v-model="profile.lifestyleOptions">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Anticipated Move In Date</label>
              <input type="date" class="form-control" v-model="profile.anticipatedMoveInDate">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Image Url</label>
              <input type="string" class="form-control" v-model="profile.imgUrl">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import $ from 'jquery'
export default {
  name: 'Profile',
  setup() {
    const state = reactive({
      profile: computed(() => AppState.myProfile)
    })
    return {
      state,
      profile: {
        name: state.profile.name,
        age: state.profile.age,
        gender: state.profile.gender,
        location: state.profile.location,
        aboutMe: state.profile.aboutMe,
        imgUrl: state.profile.imgUrl,
        lookingFor: state.profile.lookingFor,
        priceRange: state.profile.priceRange,
        interests: state.profile.interests,
        lifestyleOptions: state.profile.lifestyleOptions,
        anticipatedMoveInDate: state.profile.anticipatedMoveInDate
      },
      editProfile() {
        console.log(this.profile)
        $('#editModal').modal('toggle')
      }

    }
  }
}
</script>
<style lang="scss" scoped>
  // .water{
  //   background-image: url("../assets/img/rm-logo.png");
  // }
</style>
