const makeErrorResponse = require("../../utils/makeErrorResponse");

module.exports = class RatingGameValidator {
  constructor(data) {
    this.data = data
  }

  gameId() {
    if (this.data.gameId) return { valid: true }
    return makeErrorResponse('game id not provided', "400")
  }

  userId() {
    if (this.data.userId) return { valid: true }
    return makeErrorResponse("user id not provided", "400")
  }

  isRatingValid() {
    return this.data.rating === 'like' || this.data.rating === 'dislike'
  }

  rating() {
    if (this.data.rating) {
      if (this.isRatingValid()) {
        return { valid: true }
      }
      return makeErrorResponse("Rating not valid", "400")
    }
    return makeErrorResponse("rating not provided", "400")
  }
}
