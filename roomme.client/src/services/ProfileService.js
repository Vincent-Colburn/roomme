class ProfileService {
  async createProfile(newProfile) {
    await console.log(newProfile)
  }

  async getProfile(userId) {
    await console.log()
  }

  async editProfile(profileData) {
    await console.log(profileData)
  }
}
export const profileService = new ProfileService()
