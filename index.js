const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js'); // Exportamos nuestro archivo de rutas

// exportamos los middlewares de errores
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandler');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//Body parser
app.use(express.json()); // con este middleware permite a nuestras rutas que cuando lleven datos formato json sepa como interpretarlos

//Y ejecutamos nuestra funcion de las rutas pasandole nuestra app de express
moviesApi(app);

//catch 404
app.use(notFoundHandler);

// Los middlewares de error siempre van a ir despues de las rutas
//errors Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
