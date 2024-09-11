import { locationsService } from "../services/LocationsService";
import BaseController from "../utils/BaseController";

export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
  }

  async getLocations(req, res, nxt) {
    try {
      const locations = await locationsService.getLocations()
      res.send(locations)
    } catch (error) {
      nxt(error)
    }
  }
}