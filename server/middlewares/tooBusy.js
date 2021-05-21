const toobusy = require('toobusy-js');
const CustomError = require('../utils/customError');

module.exports = (req, res, next) => {
  if (toobusy()) {
    return next(new CustomError(503, 'server is too busy to process request, try again!'));
  }
  next();
};
