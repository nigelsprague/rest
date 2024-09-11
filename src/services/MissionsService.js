import { dbContext } from "../db/DbContext";

class MissionsService {
  async getMissionsBylocationId(locationId) {
    const missions = await dbContext.Missions.find({ locationId: locationId }).populate('rat', 'callsign specialties')
    return missions
  }
  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('rat', 'callsign specialties')
    await mission.populate('location')
    return mission
  }

  async getMissions() {
    const missions = await dbContext.Missions.find().populate('location').populate('rat', 'callsign specialties')
    return missions
  }

  async getMissionsByRatId(ratId) {
    const missions = await dbContext.Missions.find({ ratId: ratId }).populate('location')
    return missions
  }
}

export const missionsService = new MissionsService()