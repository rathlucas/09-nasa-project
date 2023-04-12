import {
  getLaunches,
  scheduleNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
} from "../models/launches/launches-model.js";

import { getPagination } from "../services/query.js";

export class LaunchesController {
  static async httpGetLaunches(req, res) {
    const { skip, limit } = getPagination(req.query);
    const launches = await getLaunches(skip, limit);
    return res.status(200).json(launches);
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

    await scheduleNewLaunch(launch);
    return res.status(201).json(launch);
  }

  static async httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);

    const existsLaunch = await existsLaunchWithId(launchId);
    if (!existsLaunch) {
      return res.status(404).json({
        error: "Launch not found",
      });
    }

    const aborted = await abortLaunchById(launchId);
    if (!aborted) {
      return res.status(400).json({ error: "Launch not aborted" });
    }

    return res.status(200).json({ ok: true });
  }
}
