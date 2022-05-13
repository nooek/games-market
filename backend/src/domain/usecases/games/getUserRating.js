module.exports = class GetUserRatingUsecase {
  constructor(gameDb) {
    this.gameDb = gameDb
  }

  async get(data) {
    if (!data.userId) throw new Error("User id is required")
    if (!data.gameId) throw new Error("Game id is required")

    return await this.gameDb.findRating({
      userId: data.userId,
      gameId: data.gameId
    })
  }
}