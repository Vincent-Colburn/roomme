import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { roomService } from '../services/RoomService'
// TODO need to import another service?

export class RoomController extends BaseController {
  constructor() {
    super('api/rooms')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:roomId', this.getOne)
    // TODO need another .get here?
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }
}
