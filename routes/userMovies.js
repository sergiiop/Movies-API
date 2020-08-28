const express = require('express');

const UserMoviesService = require('../services/userMovies')
const validetionHandler = require('../utils/middleware/validateHandler')

const { movieIdSchema } = require('../utils/schema/movies')
const { userIdSchema } = require('../utils/schema/users')
const { createUserMovieSchema } = require('../utils/schema/userMovies')

function userMoviesApi(app) {
  const router = express.Router();
  app.use('/api/user-movies', router);

  const userMoviesService = new UserMoviesService();

  router.get('/', validetionHandler({ userId: userIdSchema }, 'query'),
    async function (req, res, next) {
      const { userId } = req.query;
      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });
        res.status(200).json({
          data: userMovies,
          message: 'user movies listed'
        })
      } catch (error) {
        next(error)
      }
    })

  router.post('/', validetionHandler(createUserMovieSchema), async function (req, res, next) {
    const { body: userMovie } = req;

    try {
      const createdUserMovieId = await userMoviesService.createUserMovie({
        userMovie
      })

      res.status(201).json({
        data: createdUserMovieId,
        message: 'Movie created successfully'
      })
    } catch (error) {
      next(error)
    }
  });

  router.delete('/:userMovieId', validetionHandler({ userMovieId: movieIdSchema }, 'params', async function (req, res, next) {
    const { userMovieId } = req.params;

    try {
      const deletedUserMovieId = await userMoviesService.deleteUserMovie({
        userMovieId
      })

      res.status(200).json({
        data: deletedUserMovieId,
        message: 'user deleted successfully'
      })
    } catch (error) {
      next(error)
    }
  }))
}

module.exports = userMoviesApi
