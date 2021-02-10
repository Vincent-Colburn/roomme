import { matchService } from '../services/MatchService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
export class MatchController extends BaseController {
  constructor() {
    super('api/matches')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getMyMatches)
      .post('', this.create)
      .put('', this.edit)
      .delete('/:id', this.delete)
      .delete('', this.deleteAll)
  }

  async getMyMatches(req, res, next) {
    try {
      res.send(await matchService.getMyMatches(req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const data = await matchService.match(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await matchService.edit(req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await matchService.delete(req.params.id)
      res.send('deleted')
    } catch (error) {
      next(error)
    }
  }

  async deleteAll(req, res, next) {
    try {
      await matchService.deleteAll()
      res.send('deleted all')
    } catch (error) {
      next(error)
    }
  }
}
