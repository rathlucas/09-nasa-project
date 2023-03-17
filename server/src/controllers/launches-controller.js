import { launches } from "../models/launches-model.js";

export class LaunchesController {
  static async getLaunches(req, res) {
    return res.status(200).json(Array.from(launches.values()));
  }
}
