import { getPlanets } from "../models/planets/planets-model.js";

export class PlanetsController {
  static async httpGetPlanets(req, res) {
    return res.status(200).json(await getPlanets());
  }
}
