import { Router } from "express";

import { PlanetsController } from "../controllers/planets-controller.js";

export const planetsRouter = Router();

planetsRouter.get("/", PlanetsController.httpGetPlanets);
