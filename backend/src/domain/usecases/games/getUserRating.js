module.exports = class GetUserRatingUsecase {
  constructor(gameDb, MissingParamError) {
    this.gameDb = gameDb;
    this.MissingParamError = MissingParamError;
  }

  async get(data) {
    if (!data.userId) throw new this.MissingParamError("UserId", "An error occurred, please try again later");
    if (!data.gameId) throw new this.MissingParamError("GameId", "An error occurred, please try again later")

    return await this.gameDb.findRating({
      userId: data.userId,
      gameId: data.gameId
    })
  }
}