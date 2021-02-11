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
    return await dbContext.Account.create(body)
  }

  async getOne(profileId) {
    // should this be a findOne
    const profileFound = await dbContext.Account.findById(profileId).select(['-email', '-subs'])
    if (!profileFound) {
      throw new BadRequest('No Profile exists with that ID')
    }
    return profileFound
  }

  async getAll(userId) {
    // $ne is saying not equal, we are going to find all profiles where the ID is =/= to your userId
    return await dbContext.Account.find({ id: { $ne: userId } }).populate('age, name, gender, location, aboutMe, imgURL, lookingFor, lowPriceRange, highPriceRange, interests, lifestyleOptions, room, anticipatedMoveInDate')
  }

  // NOTE With a many to many relationship, will a get"" function go here??

  async edit(id, title, userId) {
    const updated = await dbContext.Account.findOneAndUpdate({ _id: id, creatorId: userId }, title, { new: true })
    if (!updated) {
      throw new BadRequest('No Profile exists with that ID')
    }
    return updated
  }

  async delete(id, userId) {
    return await dbContext.Account.findByIdAndDelete({ _id: id, creatorId: userId })
  }
}

export const profileService = new ProfileService()
