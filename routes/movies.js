const express = require('express'); // requerimos la libria express
const { moviesMock } = require('../utils/mocks/movies-mock.json'); // Requerimos nuestros datos falsos

//Se crea una funcion que reciba como parametro una aplicacion de express lo que permite es ser dinamicos y tener control sobre que aplicacion va a consumir nuestra ruta
function moviesApi(app) {
  // declaramos un router que viene del metodo Router() del modulo de express
  const router = express.Router();
  /* a la aplicacion que pasamos como parametros, le pasamos una ruta y el router */
  app.user('/api/movies', router);
  /* Apartir de aqui se alimanta al router con las demas rutas */
  router.get('/', async function (req, res, next) {
    /* cuando se le haga una peticion get osea de lectura a la ruta de "/" que seria nuestro home que esta definido en la linea 9 como es una peticion se tiene que utilizar codigo asincrono, entonces para eso utilizamos async function. Una ruta siempre va a recibir una request, una response y en este caso la funcionalidad next */
    /* Como es codigo asincrono tenemos que utilizar el try catch */
    try {
      /* Recibimos las peliculas haciendo un await de las promesas resolviendo las "moviesMock" */
      const movies = await Promise.response(moviesMock);
      /* Utilizamos el response y definimos el status 200 que significa que todo salio bien y tambien definimos que la respuesta json la data: siendo todas las peliculas y dejamos un mensaje para que el cliente sepa lo que paso, en este caso estamos listando todas las peliculas */
      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (error) {
      next(error);
      /* express hace el manejo de errores con la funcionalidad next pasandole el error */
    }
  });
}

module.exports = moviesApi;
