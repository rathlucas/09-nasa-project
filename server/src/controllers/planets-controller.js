import { getPlanets } from "../models/planets-model.js";

export class PlanetsController {
  static httpGetPlanets(req, res) {
    return res.status(200).json(getPlanets());
  }
}
