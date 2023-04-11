import express from "express";
import { planetsRouter } from "../routes/planets-route.js";
import { launchesRouter } from "../routes/launches-route.js";

const api = express.Router();

api.use("/planets", planetsRouter);
api.use("/launches", launchesRouter);

export { api };
