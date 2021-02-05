import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { roomService } from '../services/RoomService'
// TODO need to import another service?

export class RoomController extends BaseController {
  constructor() {
    super('api/rooms')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .get('', this.getAll)
      .get('/:roomId', this.getOne)
    // TODO need another .get here?
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.immediate
      res.send(await roomService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      return res.send(await roomService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      res.send(await roomService.getOne(req.params.roomId))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      const data = await roomService.edit(req.params.id, req.body, req.userInfo.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      return res.send(await roomService.delete(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }
}
