//funcionalidad validate que en primer lugar marcara como valido cualquier valor que se le ingrese
const joi = require('@hapi/joi');
function validate(data, schema) {
  const { error } = joi.validate(data, schema);
  return error;
}

function validationHandler(schema, check = 'body') {
  return function (req, res, next) {
    const error = validate(req[check], schema);

    error ? next(new Error(error)) : next();
  };
}

module.exports = validationHandler;
