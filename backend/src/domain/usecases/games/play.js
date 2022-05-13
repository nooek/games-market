module.exports = class PlayGameUsecase {
  constructor (gameDb, generateId) {
    this.gameDb = gameDb;
    this.generateId = generateId;
  }

  async play(info) {
    if (!info.userId) throw new Error("UserId is required")
    if (!info.gameId) throw new Error("GameId is required")

    return await this.gameDb.play({
      id: this.generateId(),
      user_id: info.userId,
      game_id: info.gameId,
    })
  }
}
