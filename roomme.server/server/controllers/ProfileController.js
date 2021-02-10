import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { profileService } from '../services/ProfileService'

export class ProfileController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .get('/:id', this.getOne)
      .get('', this.getAll)
      // .get('/:id/matches', this.getMatches)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await profileService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  // Set another rule for the getOne. if you are the logged in user and you are tyring to get your profile return EVERYTHINg, otherwise return "public data"
  async getOne(req, res, next) {
    try {
      res.send(await profileService.getOne(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      return res.send(await profileService.getAll())
    } catch (error) {
      next(error)
    }
  }

  // TODO getMatches function - pretty sure this is not correct, will need to be fixed probably
  // async getMatches(req, res, next) {
  //   try {
  //     const data = await matchesService.getMatches({ profile: req.params.id })
  //     res.send(data)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async edit(req, res, next) {
    try {
      const data = await profileService.edit(req.params.id, req.body, req.userInfo.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      return res.send(await profileService.delete(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }
}
