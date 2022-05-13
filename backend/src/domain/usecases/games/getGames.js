module.exports = class GetGamesUsecase {
  constructor(gameDb) {
    this.gameDb = gameDb
  }

  async getById(id) {
    if (!id) throw new Error('id is required')
    return await this.gameDb.getById(id)
  }

  async freeGames() {
    return await this.gameDb.getFreeGames()
  }

  async bestRatedGames() {
    return await this.gameDb.getBestRatedGames()
  }
}
