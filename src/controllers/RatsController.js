import { dbContext } from "../db/DbContext";
import { missionsService } from "../services/MissionsService";
import { ratsService } from "../services/RatsService";
import BaseController from "../utils/BaseController";

export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getRats)
      .get('/:ratId/missions', this.getMissionsByRatId)
  }

  async getRats(req, res, nxt) {
    try {
      const rats = await ratsService.getRats()
      res.send(rats)
    } catch (error) {
      nxt(error)
    }
  }

  async getMissionsByRatId(req, res, nxt) {
    try {
      const ratId = req.params.ratId
      const missions = await missionsService.getMissionsByRatId(ratId)
      res.send(missions)
    } catch (error) {
      nxt(error)
    }
  }
}