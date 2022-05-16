module.exports = class Error {
  constructor(error, statusCode) {
    this.error = error;
    this.statusCode = statusCode;
  }

  make() {
    if (!this.error || !this.statusCode) throw new Error({ error: "Error format invalid", statusCode: 500 })
    throw new Error({ error: error, statusCode: statusCode })
  }
}
