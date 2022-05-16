module.exports = class CheckPlayedUsecase {
  constructor(gameDb, MissingParamError) {
    this.gameDb = gameDb;
    this.MissingParamError = MissingParamError;
  }

  async check(info) {
    if (!info.userId) throw new this.MissingParamError("UserId", "An error occurred, please try again later");
    if (!info.gameId) throw new this.MissingParamError("GameId", "An error occurred, please try again later");

    const played = await this.gameDb.checkPlayed({ game_id: info.gameId, user_id: info.userId });

    if (played) return { played, played: true }
    return { played, played: false }
  }
};
