/* eslint-disable no-unused-vars */
const { body, check, validationResult } = require('express-validator');
const respondWith = require('../utils/respondWith');
const CustomError = require('../utils/customError');

class StudentValidator {
  async admission (req, res, next) {
    await body('first_name').exists().notEmpty().run(req);
    await body('last_name').exists().notEmpty().run(req);
    await body('gender').exists().isIn(['male', 'female', 'rather not say']).run(req);
    await body('nationality').exists().notEmpty().run(req);
    await body('dob').exists().notEmpty().run(req);
    await body('state_of_origin').exists().notEmpty().run(req);
    await body('local_govt_of_origin').exists().notEmpty().run(req);
    await body('guardian_name').exists().notEmpty().run(req);
    await body('guardian_home_address').exists().notEmpty().run(req);
    await body('guardian_phone_number').exists().notEmpty().run(req);
    await body('guardian_gender').exists().notEmpty().run(req);
    await body('guardian_nationality').exists().notEmpty().run(req);

    const hasError = validationResult(req);
    if (hasError.isEmpty()) {
      return next();
    }
    return next(new CustomError(400, 'could not validate request'));
  }
}
