module.exports = class RateGameUsecase {
  constructor(gameDb, generateId) {
    this.gameDb = gameDb;
    this.generateId = generateId
  }

  async rate(info) {
    if (!info.userId) throw new Error("userId is required");
    if (!info.gameId) throw new Error("gameId is required");
    if (!info.rating) throw new Error("rating is required");
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
