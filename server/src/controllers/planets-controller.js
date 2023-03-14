import { planets } from "../models/planets-model.js";

export class PlanetsController {
  static getPlanets(req, res) {
    return res.status(200).json(planets);
  }
}
