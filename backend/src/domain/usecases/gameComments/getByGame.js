module.exports = class GetCommentsByGameUsecase {
  constructor(commentsDb) {
    this.commentsDb = commentsDb;
  }

  async get(data) {
    if (!data.gameId) throw new Error("GameId is required")

    const comments = await this.commentsDb.getCommentsByGame(data)

    if (!comments) return { message: "No comments found" }
    return comments
  }
}
