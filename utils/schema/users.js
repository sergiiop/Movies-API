// requerimos joi
const joi = require('@hapi/joi');
//definimos el Id de el Schema de mongo
const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
//definimos el schema de como se debe crear un usuario
const createUserSchema = {
  name: joi.string().max(100).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  isAdmin: joi.boolean()
}
//exportamos los schemas
module.exports = {
  userIdSchema,
  createUserSchema
}
