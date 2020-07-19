const express = require('express'); // requerimos la libria express
const MoviesService = require('../services/movies'); //requerimos nuestro modulo de servicios

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schema/movies');

const validetionHandler = require('../utils/middleware/validateHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

//Se crea una funcion que reciba como parametro una aplicacion de express lo que permite es ser dinamicos y tener control sobre que aplicacion va a consumir nuestra ruta
function moviesApi(app) {
  // declaramos un router que viene del metodo Router() del modulo de express
  const router = express.Router();
  /* a la aplicacion que pasamos como parametros, le pasamos una ruta y el router */
  app.use('/api/movies', router);
  /* Apartir de aqui se alimanta al router con las demas rutas */

  const moviesService = new MoviesService(); //creamos una nueva instancia de nuestro modulo de servicios
  router.get('/', async function (req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { tags } = req.query;
    /* cuando se le haga una peticion get osea de lectura a la ruta de "/" que seria nuestro home que esta definido en la linea 9 como es una peticion se tiene que utilizar codigo asincrono, entonces para eso utilizamos async function. Una ruta siempre va a recibir una request, una response y en este caso la funcionalidad next */
    /* Como es codigo asincrono tenemos que utilizar el try catch */
    try {
      /* Recibimos las peliculas haciendo un await de nuestra clase de servicios con el metodo de que hace referencia a todas las peliculas */
      const movies = await moviesService.getMovies({ tags });
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
  /* Para solicitar solamente una pelicula pasamos como url el id de la pelicula que queremos */
  router.get(
    '/:movieId',
    validetionHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { movieId } = req.params;
      try {
        const movies = await moviesService.getMovie({ movieId }); //Como estamos utilizando mocks solo es necesario pasar una pelicula de momento
        res.status(200).json({
          data: movies,
          message: 'movie retrieved',
        });
      } catch (error) {
        next(error);
      }
    }
  );
  /* Para hacer la creacion de peliculas se utiliza el metodo POST y en este caso solo recibe la pelicula que es creada */
  router.post('/', validetionHandler(createMovieSchema), async function (
    req,
    res,
    next
  ) {
    const { body: movie } = req;
    try {
      const createdMovieId = await moviesService.createMovie({ movie }); //de esta forma devolvemos el id de la primera pelicula del mock
      res.status(201).json({
        data: createdMovieId,
        message: 'movie created',
      });
    } catch (error) {
      next(error);
    }
  });
  /* Para la actualizacion utilizamos el metodo put y como necesitamos saber que pelicula va a actualizar se tiene que recibir el id de la pelicula*/
  router.put(
    '/:movieId',
    validetionHandler({ movieId: movieIdSchema }, 'params'),
    validetionHandler(updateMovieSchema),
    async function (req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie,
        }); //de esta forma devolvemos el id de la primera pelicula del mock
        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated',
        });
      } catch (error) {
        next(error);
      }
    }
  );
  router.patch('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req.params;
    try {
      const modificatedMovieId = await MoviesService.modificateMovie({
        movieId,
        movie,
      });
      res.status(200).json({
        data: modificatedMovieId,
        message: 'movie modificated',
      });
    } catch (error) {
      next(error);
    }
  });
  router.delete(
    '/:movieId',
    validetionHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      const { movieId } = req.params;
      try {
        const deletedMovieId = await moviesService.deleteMovie({ movieId }); //de esta forma devolvemos el id de la primera pelicula del mock
        res.status(200).json({
          data: deletedMovieId,
          message: 'movie deleted',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = moviesApi;
