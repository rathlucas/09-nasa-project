import https from "https";
import http from "http";
import * as dotenv from "dotenv";

import { app } from "./app.js";

import { mongoConnect } from "./services/mongo.js";
import { loadPlanetsData } from "./models/planets/planets-model.js";
import { loadLaunchesData } from "./models/launches/launches-model.js";
import { UndefinedException } from "./errors/undefined-exception.js";

dotenv.config({});

const PORT = process.env.PORT ?? 8080;

if (typeof process.env["MONGO_URL"] == "undefined") {
  throw new UndefinedException(
    "MONGO_URL variable is undefined. Create a .env file inside the server folder and add it accordingly."
  );
}

if (typeof process.env["NODE_ENV"] == "undefined") {
  throw new UndefinedException(
    "NODE_ENV variable is undefined. Create a .env file inside the server folder and add it accordingly."
  );
}

const protocol = process.env.NODE_ENV === "development" ? http : https;
const server = protocol.createServer(app);

(async () => {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchesData();

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();
