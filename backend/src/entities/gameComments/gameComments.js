module.exports = class GameComments {
  constructor(idGen) {
    this.idGen = idGen;
  }

  validate(comment) {
    if (!comment.comment) throw new Error("The comment must has at least 1 character")
    if (!comment.gameId) throw new Error("GameId is required")
    if (!comment.userId) throw new Error("UserId is required")

    return {
      getCommentId: () => this.idGen(),
      getComment: () => comment.comment,
      getUserId: () => comment.userId,
      getGameId: () => comment.gameId
    }
  }
}
