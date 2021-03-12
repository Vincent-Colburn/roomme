import { matchService } from '../services/MatchService'
import BaseController from '../utils/BaseController'

export class CountController extends BaseController {
  constructor() {
    super('api/count')
    this.router
      .get('', this.getCount)
  }

  async getCount(req, res, next) {
    try {
      const matches = await matchService.getCount()
      res.send(matches)
    } catch (error) {
      next(error)
    }
  }
}
