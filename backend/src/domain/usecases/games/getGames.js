module.exports = class GetGamesUsecase {
  constructor(gameDb, MissingParamError) {
    this.gameDb = gameDb;
    this.MissingParamError = MissingParamError;
  }

  async getById(id) {
    if (!id) throw new this.MissingParamError("GameId", "An error occurred, please try again later")
    return await this.gameDb.getById(id)
  }

  async getByDev(dev) {
    if (!dev) throw new this.MissingParamError("Dev", "An error occurred, please try again later")
    return await this.gameDb.getByDev(dev)
  }

  async freeGames() {
    return await this.gameDb.getFreeGames()
  }

  async bestRatedGames() {
    return await this.gameDb.getBestRatedGames()
  }
}
