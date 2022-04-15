//Imports
const request = require("supertest");
const app = require("../base/config/app");
const Profesor = require("../base/models/Profesor");

//Auxiliares
const profesorPrueba = {
  name: "Reidel Morales Toledo",
  phone: 65879632,
  email: "rey911207@gmail.com",
  address: "Santiago Metropolitano",
  subject: "Programacion",
  city: "Gran Santiago",
  age: 30,
  ident: 911207,
};

//Set de Pruebas
describe("Pruebas con el modelo Profesor", () => {
  let server;
  const port = app.get("port");

  beforeAll((done) => {
    server = app.listen(port);
    done();
  });

  afterAll((done) => {
    server.close();
    done();
  });

  it("Prueba Adicionar Profesor", async () => {
    const res = await request(server)
      .post("/api/proy-escuela/v1/profesor/create")
      .send(profesorPrueba);

    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      status: true,
      message: "New added profesor",
    });
  });
});
