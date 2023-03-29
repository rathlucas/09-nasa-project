import request from "supertest";
import { app } from "../../src/app";

describe("Test GET /launches", () => {
  it("Should respond with 200 success", async () => {
    await request(app).get("/launches").expect(200);
  });
});

describe("Test POST /launches", () => {
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "NCC 1701",
    target: "kepler-186 f",
    launchDate: "January 4, 2028",
  };

  const launchDataWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701",
    target: "kepler-186 f",
  };

  it("Should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  it("Should catch missing required properties", () => {});

  it("Should catch invalid dates", () => {});
});
