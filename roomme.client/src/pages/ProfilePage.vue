<template>
  <div class="profile container-fluid background" v-if="state.profile.name">
    <div class="row text-center my-3">
      <div class="col">
        <h1>Welcome to your <span class="primary">Profile</span> Page</h1>
        <button type="button" class="btn primary-background" data-toggle="modal" data-target="#editModal">
          Edit Profile
        </button>
      </div>
    </div>
    <div class="row">
      <div class="offset- col-5">
        <img :src="state.profile.imgURL" class="img-fluid" alt="">
      </div>
      <div class="col water">
        <div class="row my-2">
          <div class="col">
            <h3><span class="primary">Name:</span> {{ state.profile.name }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3><span class="primary">Age:</span> {{ state.profile.age }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3><span class="primary">Gender:</span> {{ state.profile.gender }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3><span class="primary">Monthly Budget:</span>   ${{ state.profile.lowPriceRange }} -  ${{ state.profile.highPriceRange }}</h3>
          </div>
        </div>
        <div class="row my-2">
          <div class="col">
            <h3><span class="primary">Anticipated Move-in  Date:</span>  {{ state.profile.anticipatedMoveInDate }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <!-- <div class="col"></div> -->
      <div class="offset-2 col-6">
        <h4 class="primary">
          About Me:
        </h4>
        <h5>{{ state.profile.aboutMe }}</h5>
      </div>
      <!-- <div class="col"></div> -->
    </div>
    <div class="row my-5">
      <div class=" offset-2 col-6">
        <h3 class="primary">
          Interests
        </h3>
        <h5>{{ state.profile.interests }} </h5>
      </div>
    </div>
    <div class="row">
      <!-- <div class="col"></div> -->
      <div class="offset-2 col-6">
        <h4 class="primary">
          Lifestyle Choices:
        </h4>
        <h5>
          {{ state.profile.lifestyleOptions }}
        </h5>
      </div>
      <!-- <div class="col"></div> -->
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
        <div class="modal-header very-light-blue">
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
                <div class="form-group very-light-blue">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" class="form-control" v-model="profile.name">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group very-light-blue">
                  <label for="exampleInputPassword1">Age</label>
                  <input type="number" class="form-control" v-model="profile.age">
                </div>
              </div>
            </div>
            <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">Gender</label>
              <input type="string" class="form-control" v-model="profile.gender">
            </div>
            <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">Zip Code</label>
              <input type="string" class="form-control" v-model="profile.location">
            </div>
            <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">About Me</label>
              <textarea class="form-control" v-model="profile.aboutMe" rows="3"></textarea>
            </div>
            <div class="form-group border">
              <label for="exampleradios1" class="very-light-blue d-flex">I am looking for: </label>
              <div class="form-check">
                <input class="form-check-input"
                       type="radio"
                       name="exampleRadios"
                       id="exampleRadios1"
                       value="roommate"
                       v-model="profile.lookingFor"
                       checked
                >
                <label class="form-check-label" for="exampleRadios1">
                  RoomMe
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input"
                       type="radio"
                       name="exampleRadios"
                       id="exampleRadios2"
                       value="roommate with room"
                       v-model="profile.lookingFor"
                >
                <label class="form-check-label" for="exampleRadios2">
                  I have a room and need a RoomMe
                </label>
              </div>
            </div>

            <!-- <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">Looking For</label>
              <input type="string" class="form-control" v-model="profile.lookingFor" placeholder="roommate, roommate with room">
            </div> -->
            <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">Price Range Low</label>
              <input type="string" class="form-control" v-model="profile.lowPriceRange">
            </div>
            <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">Price Range High</label>
              <input type="string" class="form-control" v-model="profile.highPriceRange">
            </div>
            <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">Interests</label>
              <input type="string" class="form-control" v-model="profile.interests">
            </div>
            <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">Lifestyle Options</label>
              <input type="string" class="form-control" v-model="profile.lifestyleOptions">
            </div>
            <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">Anticipated Move In Date</label>
              <input type="date" class="form-control" v-model="profile.anticipatedMoveInDate">
            </div>
            <div class="form-group very-light-blue">
              <label for="exampleInputEmail1">Image Url</label>
              <input type="string" class="form-control" v-model="profile.imgURL">
            </div>
          </div>
          <div class="modal-footer very-light-blue">
            <button type="button" class="btn tertiary-background" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn primary-background">
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
          console.log('look here dumby', this.profile)
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
.background {
background-image: linear-gradient(white, #e6fff7);
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-position: center;
}
  .water{
    background-image: url("../assets/img/rm-logo3.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    margin-right: 5em;
    position: relative;
  }
  .water::before {
    background-color: rgba(0,0,0,0.75);
    position: absolute;
  }
  .home{
  height: 50%;
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
.btn:hover {
  background-color: #1e6096;
}
// .primary:hover {
//   color: #1e6096;
// }
.very-light-blue {
  background-color: #deeaee;
}
.container-fluid {
  background-color: #FFFAFA;
  // background-color: #edf7F6
}
</style>
