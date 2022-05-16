module.exports = class PlayGameUsecase {
  constructor (gameDb, generateId, MissingParamError) {
    this.gameDb = gameDb;
    this.generateId = generateId;
    this.MissingParamError = MissingParamError;
  }

  async play(info) {
    if (!info.userId) throw new this.MissingParamError("UserId", "An error occurred, please try again later");
    if (!info.gameId) throw new this.MissingParamError("GameId", "An error occurred, please try again later")

    return await this.gameDb.play({
      id: this.generateId(),
      user_id: info.userId,
      game_id: info.gameId,
    })
  }
}
