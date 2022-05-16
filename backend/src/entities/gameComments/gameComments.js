module.exports = class GameComments {
  constructor(idGen, InvalidParamError, MissingParamError) {
    this.idGen = idGen;
    this.InvalidParamError = InvalidParamError;
    this.MissingParamError = MissingParamError;
  }

  validate(comment) {
    if (!comment.comment) throw new this.InvalidParamError("Comment", "The comment must has at least 1 character")
    if (!comment.gameId) throw new this.MissingParamError("GameId", "An error occurred, please try again later")
    if (!comment.userId) throw new this.MissingParamError("UserId", "An error occurred, please try again later")

    return {
      getCommentId: () => this.idGen(),
      getComment: () => comment.comment,
      getUserId: () => comment.userId,
      getGameId: () => comment.gameId
    }
  }
}
