//Imports
const app = require("./base/config/app");
require("./base/config/dbconection");

//Inicializations
const port = app.get("port");

//Listener
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
