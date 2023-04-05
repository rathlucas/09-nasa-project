import https from "https";
import http from "http";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

import { app } from "./app.js";
import { loadPlanetsData } from "./models/planets/planets-model.js";
import { UndefinedException } from "./errors/undefined-exception.js";

dotenv.config({});

const PORT = process.env.PORT ?? 8080;

const MONGO_URL = `mongodb+srv://lucas:${process.env.MONGO_PASSWORD}@cluster0.chbipbt.mongodb.net/nasa?retryWrites=true&w=majority`;

if (typeof process.env["MONGO_PASSWORD"] == "undefined") {
  throw new UndefinedException(
    "MONGO_PASSWORD variable is undefined. Create a .env file inside the server folder and add it accordingly."
  );
}

if (typeof process.env["NODE_ENV"] == "undefined") {
  throw new UndefinedException(
    "NODE_ENV variable is undefined. Create a .env file inside the server folder and add it accordingly."
  );
}

const protocol = process.env.NODE_ENV === "development" ? http : https;
const server = protocol.createServer(app);

mongoose.connection.on("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (e) => {
  console.error(e);
});

(async () => {
  await mongoose.connect(MONGO_URL);

  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();
