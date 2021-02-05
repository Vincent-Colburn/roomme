import { matchService } from '../services/MatchService'
import BaseController from '../utils/BaseController'

export class MatchController extends BaseController {
  constructor() {
    super('api/matches')
    this.router
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async create(req, res, next) {
    try {
      const data = await matchService.create(req.body)
      res.status(201).send(data)
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
}
