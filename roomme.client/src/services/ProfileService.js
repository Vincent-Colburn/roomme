import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  // async createProfile(newProfile) {
  //   const res = await api.post('api/profiles', newProfile)
  //   AppState.myProfile = res.data
  //   console.log('this should be it', AppState.myProfile)
  // }

  // async getProfile() {
  //   const res = await api.get('api/myProfile')
  //   AppState.myProfile = res.data
  // }

  async getProfiles() {
    const res = await api.get('api/profiles')
    AppState.profiles = res.data
    // console.log('hi i am trying to get your profiles master', AppState.profiles)
  }

  async editProfile(profileData) {
    const res = await api.put('account', profileData)
    AppState.account = res.data
  }

  async dislike(id) {
    // console.log('dislike ID', id)
  }
}
export const profileService = new ProfileService()
