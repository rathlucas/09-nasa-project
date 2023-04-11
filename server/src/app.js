import path from "path";
import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";

import { getDirname } from "./helpers/utils.js";
import { api } from "./routes/api.js";

export const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);
app.use(morgan("combined"));

app.use(json());
app.use(express.static(path.join(getDirname(import.meta.url), "..", "public")));

app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(getDirname(import.meta.url), "..", "public", "index.html")
  );
});
