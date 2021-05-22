import { param, validationResult } from 'express-validator';
import CustomError from '../utils/customError';

class ResultValidator {
  async validatePinAndSerial (req, res, next) {
    await param('pin').exists().notEmpty().isLength(12).run(req);
    await param('serial_number').exists().notEmpty().isLength({ min: 12, max: 13 }).run(req);

    const hasError = validationResult(req);
    if (hasError.isEmpty()) {
      return next();
    }
    return next(new CustomError(400, 'Pin/Serial mismatch'));
  }
}

export default new ResultValidator();
