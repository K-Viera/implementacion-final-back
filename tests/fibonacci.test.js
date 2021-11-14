const request = require("supertest");
const app = require("../index");

describe("fibonacci", () => {
  it("good data", (done) => {
    request(app)
      .post("/fibonacci")
      .send({ input: 10 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("bad data < 0", (done) => {
    request(app)
      .post("/fibonacci")
      .send({ input: -10 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("bad data big number", (done) => {
    request(app)
      .post("/fibonacci")
      .send({ input: 1000000000 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);
});
