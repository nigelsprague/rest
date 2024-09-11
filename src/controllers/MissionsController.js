import { missionsService } from "../services/MissionsService";
import BaseController from "../utils/BaseController";

export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getMissions)
      .post('', this.createMission)
  }

  async getMissions(req, res, nxt) {
    try {
      const missions = await missionsService.getMissions()
      res.send(missions)
    } catch (error) {
      nxt(error)
    }
  }

  async createMission(req, res, nxt) {
    try {
      const missionData = req.body
      const mission = await missionsService.createMission(missionData)
      res.send(mission)
    } catch (error) {
      nxt(error)
    }
  }
}