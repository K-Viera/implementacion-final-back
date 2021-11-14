const request = require("supertest");
const app = require("../index");

describe("factorial", () => {
  it("good data", (done) => {
    request(app)
      .post("/factorial")
      .send({ input: 10 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("bad data negative", (done) => {
    request(app)
      .post("/factorial")
      .send({ input: -10 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("data to big", (done) => {
    request(app)
      .post("/factorial")
      .send({ input: 10000000 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);
});
