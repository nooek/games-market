module.exports = class MissingParamError extends Error {
  constructor(paramName, messageToClient) {
    super(`Missing param: ${paramName}`);
    this.name = "MissingParamError";
    this.messageToClient = messageToClient;
    this.statusCode = 400;
  }
};
