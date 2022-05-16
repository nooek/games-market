module.exports = class RateGameUsecase {
  constructor(gameDb, generateId, MissingParamError) {
    this.gameDb = gameDb;
    this.generateId = generateId;
    this.MissingParamError = MissingParamError;
  }

  async rate(info) {
    if (!info.userId) throw new this.MissingParamError("UserId", "An error occurred, please try again later");
    if (!info.gameId) throw new this.MissingParamError("GameId", "An error occurred, please try again later")
    if (!info.rating) throw new this.MissingParamError("Rating", "An error occurred, please try again later");
    let changedRating = false

    const alreadyRated = await this.gameDb.findRating(info);

    if (alreadyRated) {
      if (alreadyRated.dataValues.rating === info.rating) throw new Error("Same rating found");
      await this.gameDb.unrate(alreadyRated.dataValues.id)
      changedRating = true
    }

    const rated = await this.gameDb.rate({
      id: this.generateId(),
      user_id: info.userId,
      game_id: info.gameId,
      rating: info.rating,
    });

    return { rated, changedRating: changedRating }
  }
};
