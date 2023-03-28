import {
  getLaunches,
  addLaunch,
  existsLaunchWithId,
} from "../models/launches-model.js";

export class LaunchesController {
  static async httpGetLaunches(req, res) {
    return res.status(200).json(getLaunches());
  }

  static async httpAddLaunch(req, res) {
    const launch = req.body;

    if (
      !launch.mission ||
      !launch.rocket ||
      !launch.launchDate ||
      !launch.target
    ) {
      return res
        .status(400)
        .json({ error: "Missing required launch property" });
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
      return res.status(400).json({ error: "Invalid launch date" });
    }

    addLaunch(launch);
    return res.status(201).json(launch);
  }

  static async httpAbortLaunch(req, res) {
    const launchId = req.params.id;

    if (!existsLaunchWithId(launchId)) {
      return res.status(404).json({
        error: "Launch not found",
      });
    }

    return res.status(200).json(aborted);
  }
}
