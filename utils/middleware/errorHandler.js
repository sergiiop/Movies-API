const boom = require('@hapi/boom');
const { config } = require('../../config');

function withErrorStack(error, stack) {
  //Funcionalidad de ayuda(no es un middleware)
  if (config.dev) {
    return { ...error, stack }; // se hace un spreat operetor al error porque ahora trae màs propiedades
  }

  return error;
}

function logErrors(err, req, res, next) {
  // Funcionalidad para imprimir errores
  console.log(err);
  next(err); // llamamos next() para ejecutar el siguiente middleware y le pasamos el error que optuvimos
}

//si llega un error que no sea de boom, lo pasara a estructura boom
function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
}

function errorHandler(err, req, res, next) {// eslint-disable-line
  const {
    output: { statusCode, payload },
  } = err;
  // Funcionalidad para manejo de errores
  //express hace el manejo de errores en formato HTML, lo esencial es formato JSON
  res.status(statusCode || 500); // se determina el estado del error o un error por defecto del servidor
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
  wrapErrors
};
