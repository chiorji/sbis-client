/* eslint-disable max-len, eqeqeq, no-unused-vars */
const formatResponse = require('../utils/formatResponse');

module.exports = (app) => {
  const possibleErrorsNames = ['CastError', 'JsonWebTokenError', 'ValidationError', 'SyntaxError', 'MongooseError', 'MongoError'];
  app.use((req, res, next) => next());

  app.use((err, req, res, next) => {
    if (err.name == 'CustomError') {
      return res.status(err.status).json(formatResponse(err.status, err.message, null, false));
    } else if (err.name == 'MongoError' && err.code == 11000) {
      return res.status(400).json(formatResponse(400, 'Validation failed, fields already exist', null, false));
    } else if (possibleErrorsNames.indexOf(err.name) > -1) {
      return res.status(400).json(formatResponse(400, err.message, null, false));
    } else {
      res.status(500).send(formatResponse(500, err.message, null, false));
    }
  });

  return app;
};
