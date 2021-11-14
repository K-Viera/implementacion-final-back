const request = require("supertest");
const app = require("../index");

describe("triangulo", () => {
  it("good data", (done) => {
    request(app)
      .post("/triangulo")
      .send({ lado1: 10, lado2: 10, lado3: 10 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("bad data one larger", (done) => {
    request(app)
      .post("/triangulo")
      .send({ lado1: 100, lado2: 10, lado3: 10 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);

  it("bad data negative", (done) => {
    request(app)
      .post("/triangulo")
      .send({ lado1: -10, lado2: 10, lado3: 10 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(100000);
});
