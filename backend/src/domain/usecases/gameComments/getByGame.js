module.exports = class GetCommentsByGameUsecase {
  constructor(commentsDb, MissingParamError) {
    this.commentsDb = commentsDb;
    this.MissingParamError = MissingParamError;
  }

  async get(data) {
    if (!data.gameId) throw new this.MissingParamError("GameId", "An error occurred, please try again later")

    const comments = await this.commentsDb.getCommentsByGame(data)

    if (!comments) return { message: "No comments found" }
    return comments
  }
}
