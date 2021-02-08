import { Auth0Provider } from '@bcwdev/auth0provider'
import { myProfileService } from '../services/MyProfileService'
import BaseController from '../utils/BaseController'

export class MyProfileController extends BaseController {
  constructor() {
    super('api/myProfile')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getOne)
  }

  async getOne(req, res, next) {
    try {
      res.send(await myProfileService.getOne(req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }
}
