module.exports = class InvalidParamError extends Error {
  constructor(paramName, messageToClient) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
    this.messageToClient=messageToClient
    this.statusCode = 400
  }
}
