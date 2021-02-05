import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RoomService {
  //     .use(Auth0Provider.getAuthorizedUserInfo)
  //   .post('', this.create)
  //   .get('', this.getAll)
  //   .get('/:roomId', this.getOne)
  // // TODO need another .get here?
  //   .put('/:id', this.edit)
  //   .delete('/:id', this.delete)
  async create(body) {
    return await dbContext.Room.create(body)
  }

  async getAll(query) {
    return await dbContext.Room.find(query).populate('creator')
  }

  async getOne(roomId) {
    const roomFound = await dbContext.Room.findById(roomId).populate('creator', 'name')
    if (!roomFound) {
      throw new BadRequest('No Room exists with that ID')
    }
    return roomFound
  }

  async edit(id, title, userId) {
    // TODO had to currently do this due to Jordan issue of "can't get account", we can swap these out when fixed
    // const updated = await dbContext.Room.findOneAndUpdate({ _id: id, creatorId: userId }, title, { new: true })
    const updated = await dbContext.Room.findOneAndUpdate({ _id: id }, title, { new: true })
    if (!updated) {
      throw new BadRequest('No Room exists with that ID')
    }
    return updated
  }

  async delete(id, userId) {
    return await dbContext.Room.findByIdAndDelete({ _id: id, creatorId: userId })
  }
}

export const roomService = new RoomService()
