import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MyProfileService {
  async getOne(id) {
    const profileFound = await dbContext.Profile.findOne({ creatorId: id })
    if (!profileFound) {
      throw new BadRequest('No profile exists with that ID')
    }
    return profileFound
  }
}

export const myProfileService = new MyProfileService()
