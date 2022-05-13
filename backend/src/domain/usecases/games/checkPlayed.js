module.exports = class CheckPlayedUsecase {
  constructor(gameDb) {
    this.gameDb = gameDb;
  }

  async check(info) {
    if (!info.userId) throw new Error("UserId is required");
    if (!info.gameId) throw new Error("GameId is required");

    const played = await this.gameDb.checkPlayed({ game_id: info.gameId, user_id: info.userId });

    if (played) return { played, played: true }
    return { played, played: false }
  }
};
