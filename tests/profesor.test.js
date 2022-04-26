//Imports
const request = require("supertest");
const app = require("../base/config/app");

//Variables auxiliares
const newProfesor = {
  name: "Alejandro Interian",
  phone: 59493849,
  email: "alej@gmail.com",
  address: "Calle",
  subject: "Ciencias",
  city: "La Habana",
  age: 52,
  ident: 700321,
};

//Set de pruebas
describe("Pruebas Modelo Profesor", () => {
  let server;
  const port = 3000;

  beforeAll((done) => {
    server = app.listen(port);
    done();
  });

  afterAll((done) => {
    server.close();
    done();
  });

  //Insertar
  test("Add Profesor", async () => {
    const res = await request(server)
      .get("/api/proy-escuela/v1/profesor/create")
      .send(newProfesor);

    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      status: true,
      message: "New added profesor",
    });
  });
});
