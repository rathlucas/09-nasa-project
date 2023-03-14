import https from "https";
import http from "http";
import * as dotenv from "dotenv";

import { app } from "./app.js";

dotenv.config({});

const PORT = process.env.PORT || 8080;

const protocol = process.env.NODE_ENV === "development" ? http : https;
const server = protocol.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
