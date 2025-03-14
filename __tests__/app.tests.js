const request = require("supertest");
const app = require("../src/app");

describe("Test API Endpoints", () => {
  test("GET / should return 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, World!");
  });
});
