const request = require("supertest");
const app = require("../index");

describe("circulo", () => {
  it("good data", (done) => {
    request(app)
      .post("/circulo")
      .send({ radio: 10 })
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
      .post("/circulo")
      .send({ radio: -10 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("no data", (done) => {
    request(app)
      .post("/circulo")
      .send({})
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);
});
