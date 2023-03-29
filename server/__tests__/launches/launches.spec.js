import request from "supertest";
import { app } from "../../src/app";

describe("Test GET /launches", () => {
  it("Should respond with 200 success", async () => {
    await request(app).get("/launches").expect(200);
  });
});

describe("Test POST /launches", () => {
  it("Should respond with 200 success", () => {});

  it("Should catch missing required properties", () => {});

  it("Should catch invalid dates", () => {});
});
