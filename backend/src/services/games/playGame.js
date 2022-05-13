
const makeErrorResponse = require("../../utils/makeErrorResponse");

module.exports = class PlayGameValidator {
  constructor(data) {
    this.data = data;
  }

  gameId() {
    if (this.data.gameId) return { valid: true }
    return makeErrorResponse('game id not provided', "400")
  }

  userId() {
    if (this.data.userId) return { valid: true }
    return makeErrorResponse("user id not provided", "400")
  }
}
