import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MatchService {
  async getAll(query) {
    return await dbContext.Match.find(query)
  }

  async create(body) {
    return await dbContext.Match.create(body)
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
