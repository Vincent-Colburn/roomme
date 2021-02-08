import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  async createProfile(newProfile) {
    const res = await api.post('api/profiles', newProfile)
    AppState.myProfile = res.data
    console.log('this should be it', AppState.myProfile)
  }

  async getProfile() {
    const res = await api.get('api/myProfile')
    AppState.myProfile = res.data
  }

  async editProfile(profileData, id) {
    await api.put('api/profiles/' + id, profileData)
    this.getProfile(id)
  }
}
export const profileService = new ProfileService()
