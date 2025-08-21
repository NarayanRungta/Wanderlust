class ExpressError extends Error {
  constructor(statuscode, message) {
    super();
    this.statusCode = 200;
    this.message = message;
  }
}

module.exports = ExpressError;