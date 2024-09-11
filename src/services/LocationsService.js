import { dbContext } from "../db/DbContext";

class LocationsService {
  async getLocations() {
    const locations = dbContext.Locations.find()
    return locations
  }
}

export const locationsService = new LocationsService()