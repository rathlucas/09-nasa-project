import { getLaunches } from "../models/launches-model.js";

export class LaunchesController {
  static async httpGetLaunches(req, res) {
    return res.status(200).json(getLaunches());
  }
}
