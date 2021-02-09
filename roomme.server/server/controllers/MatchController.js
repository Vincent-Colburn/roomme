import { matchService } from '../services/MatchService'
import BaseController from '../utils/BaseController'

export class MatchController extends BaseController {
  constructor() {
    super('api/matches')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .put('', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      res.send(await matchService.getAll(req.body))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const data = await matchService.create(req.body)
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
}
