import express from "express";
import { LaunchesController } from "../controllers/launches-controller.js";

const launchesRouter = express.Router();

launchesRouter.get("/", LaunchesController.httpGetLaunches);

export { launchesRouter };
