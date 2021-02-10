import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
// import { myProfileService } from './MyProfileService'

class MatchService {
  async getMyMatches(id) {
    // const profile = myProfileService.getOne(userId)
    // const query = {
    //   matched: true
    // }
    //  This is working await dbContext.Match.find({ matched: true })
    // const toUser = await dbContext.Match.find({ toUserId: id, matched: true })
    const fromUser = await dbContext.Match.find({ fromUserId: id, matched: true })

    return fromUser
  }

  async match(body) {
    const exist = await dbContext.Match.findOne({ toUserId: body.userId, fromUserId: body.toUserId })
    if (exist) {
      const updated = await dbContext.Match.findOneAndUpdate({ toUserId: body.userId, fromUserId: body.toUserId }, { matched: true, status: 'accepted' }, { new: true })
      if (!updated) {
        throw new BadRequest('Could not update')
      }
      return updated
    } else {
      return await dbContext.Match.create({ toUserId: body.toUserId, fromUserId: body.userId })
    }
  }

  async edit(body) {
    const updated = await dbContext.Match.findOneAndUpdate({ toUserId: body.toUserId, fromUserId: body.fromUserId }, body, { new: true })
    if (!updated) {
      throw new BadRequest('No Match exists with your search')
    }
    return updated
  }

  async delete(id) {
    const deleted = await dbContext.Match.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest('invalid id')
    }
  }

  async deleteAll() {
    const deleted = await dbContext.Match.deleteMany()
    if (!deleted) {
      throw new BadRequest('nope')
    }
  }
}

export const matchService = new MatchService()
