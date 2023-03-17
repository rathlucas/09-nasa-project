import https from "https";
import http from "http";
import * as dotenv from "dotenv";

import { app } from "./app.js";
import { loadPlanetsData } from "./models/planets-model.js";
import { UndefinedException } from "./errors/undefined-exception.js";

dotenv.config({});

const PORT = process.env.PORT ?? 8080;

if (typeof process.env["NODE_ENV"] == "undefined") {
  throw new UndefinedException(
    "NODE_ENV variable is undefined. Create a .env file inside the server folder and add it accordingly."
  );
}

const protocol = process.env.NODE_ENV === "development" ? http : https;
const server = protocol.createServer(app);

await loadPlanetsData();
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
