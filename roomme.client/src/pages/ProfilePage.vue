<template>
  <div class="profile container-fluid" v-if="state.profile.name">
    <div class="row text-center my-3">
      <div class="col">
        <h1>Welcome to your Profile Page</h1>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal">
          Edit Profile
        </button>
      </div>
    </div>
    <div class="row">
      <div class="offset-2 col-2">
        <img :src="state.profile.imgURL" class="img-fluid" alt="">
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
            <h3>Price range: {{ state.profile.lowPriceRange }} - {{ state.profile.highPriceRange }}</h3>
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
  <!-- <div class="container" v-else>
    <div class="row text-center">
      <div class="col">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createProfileModal">
          Create Profile
        </button>
      </div>
    </div>
  </div> -->
  <!-- Edit Profile Modal -->
  <!--    v-if="state.loaded == true" put this in the topmost div -->
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
        <form @submit.prevent="editProfile">
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
              <label for="exampleInputEmail1">Price Range Low</label>
              <input type="string" class="form-control" v-model="profile.lowPriceRange">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Price Range High</label>
              <input type="string" class="form-control" v-model="profile.highPriceRange">
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
              <input type="string" class="form-control" v-model="profile.imgURL">
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

  <!-- Create Profile Modal -->
  <!-- <div class="modal fade"
       id="createProfileModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Create Profile
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="editProfile">
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" class="form-control" v-model="newProfile.name" required>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="exampleInputPassword1">Age</label>
                  <input type="number" class="form-control" v-model="newProfile.age" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Gender</label>
              <input type="string" class="form-control" v-model="newProfile.gender" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Zip Code</label>
              <input type="string" class="form-control" v-model="newProfile.location" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">About Me</label>
              <textarea class="form-control" v-model="newProfile.aboutMe" rows="3" required></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Looking For</label>
              <input type="string" class="form-control" v-model="newProfile.lookingFor" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Price Range Low</label>
              <input type="string" class="form-control" v-model="newProfile.lowPriceRange" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Price Range High</label>
              <input type="string" class="form-control" v-model="newProfile.highPriceRange" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Interests</label>
              <input type="string" class="form-control" v-model="newProfile.interests" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Lifestyle Options</label>
              <input type="string" class="form-control" v-model="newProfile.lifestyleOptions" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Anticipated Move In Date</label>
              <input type="date" class="form-control" v-model="newProfile.anticipatedMoveInDate" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Image Url</label>
              <input type="string" class="form-control" v-model="newProfile.imgURL" required>
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
  </div> -->
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import $ from 'jquery'
import { logger } from '../utils/Logger'
import { profileService } from '../services/ProfileService'
export default {
  name: 'Profile',
  setup() {
    const state = reactive({
      profile: computed(() => AppState.account)
      // loaded: false
      // account: computed(() => AppState.user)
    })
    // onMounted(async() => {
    //   try {
    //     await profileService.getProfile()
    //     // state.loaded = true
    //   } catch (error) {
    //     logger.log(error)
    //   }
    // })
    return {
      state,
      profile: {
        name: state.profile.name,
        age: state.profile.age,
        gender: state.profile.gender,
        location: state.profile.location,
        aboutMe: state.profile.aboutMe,
        imgURL: state.profile.imgURL,
        lookingFor: state.profile.lookingFor,
        lowPriceRange: state.profile.lowPriceRange,
        highPriceRange: state.profile.highPriceRange,
        interests: state.profile.interests,
        lifestyleOptions: state.profile.lifestyleOptions,
        anticipatedMoveInDate: state.profile.anticipatedMoveInDate
      },
      newProfile: {},
      createProfile() {
        try {
          profileService.createProfile(this.newProfile)
          this.newProfile = ''
          $('#createProfileModal').modal('toggle')
        } catch (error) {
          logger.log(error)
        }
      },

      editProfile() {
        try {
          profileService.editProfile(this.profile)
          $('#editModal').modal('toggle')
        } catch (error) {
          logger.log(error)
        }
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
