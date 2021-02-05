import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ProfileService {
  //   .use(Auth0Provider.getAuthorizedUserInfo)
  // .post('', this.create)
  // .get('/:id', this.getOne)
  // .get('', this.getAll)
  // .get('/:id/matches', this.getMatches)
  // .put('/:id', this.edit)
  // .delete('/:id', this.delete)
  async create(body) {
    return await dbContext.Profile.create(body)
  }

  async getOne(profileId) {
    const profileFound = await dbContext.Profile.findById(profileId).populate('creator')
    if (!profileFound) {
      throw new BadRequest('No Profile exists with that ID')
    }
    return profileFound
  }

  async getAll(query) {
    return await dbContext.Profile.find(query).populate('creator')
  }

  // NOTE With a many to many relationship, will a get"" function go here??

  async edit(id, title, userId) {
    const updated = await dbContext.Profile.findOneAndUpdate({ _id: id, creatorId: userId }, title, { new: true })
    if (!updated) {
      throw new BadRequest('No Profile exists with that ID')
    }
    return updated
  }

  async delete(id, userId) {
    return await dbContext.Profile.findByIdAndDelete({ _id: id, creatorId: userId })
  }
}

export const profileService = new ProfileService()
