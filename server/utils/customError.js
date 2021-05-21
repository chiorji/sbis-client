class CustomError extends Error {
  constructor (status, message) {
    super(message);
    this.status = status || 404;
    this.name = this.constructor.name;
  }
}

class JwtException extends Error {
  constructor (status, message) {
    super(message);
    this.status = status || 400;
    this.name = this.constructor.name;
  }
}

module.exports = CustomError;
module.exports.JwtException = JwtException;
