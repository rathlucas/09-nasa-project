import express, { json } from "express";
import cors from "cors";

import { planetsRouter } from "./routes/planets-route.js";

export const app = express();

app.use(
  cors({
    origin: ["http://localhost:3001"],
  })
);
app.use(json());
app.use("/planets", planetsRouter);
