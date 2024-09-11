import { locationsService } from "../services/LocationsService";
import { missionsService } from "../services/MissionsService";
import BaseController from "../utils/BaseController";

export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
      .get('/:locationId/missions', this.getMissionsByLocationId)
  }

  async getLocations(req, res, nxt) {
    try {
      const locations = await locationsService.getLocations()
      res.send(locations)
    } catch (error) {
      nxt(error)
    }
  }

  async getMissionsByLocationId(req, res, nxt) {
    try {
      const locationId = req.params.locationId
      const missions = await missionsService.getMissionsBylocationId(locationId)
      res.send(missions)
    } catch (error) {
      nxt(error)
    }
  }
}