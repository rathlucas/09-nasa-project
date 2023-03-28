const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("december 27, 2030"),
  target: "Kepler-442b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getLaunches() {
  return Array.from(launches.values());
}

function addLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["NASA", "Zero to Mastery"],
      flightNumber: latestFlightNumber,
    })
  );
}

export { getLaunches, addLaunch };
