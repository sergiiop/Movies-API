const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js'); // Exportamos nuestro archivo de rutas

//Y ejecutamos nuestra funcion de las rutas pasandole nuestra app de express
moviesApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
