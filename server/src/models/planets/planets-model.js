import { parse } from "csv-parse";
import fs from "fs";
import path from "path";
import planets from "./planets-mongo.js";
import { getDirname } from "../../helpers/utils.js";

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(
        getDirname(import.meta.url),
        "..",
        "..",
        "src",
        "data",
        "kepler_data.csv"
      )
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve();
      });
  });
}

function getPlanets() {
  return habitablePlanets;
}

export { loadPlanetsData, getPlanets };
