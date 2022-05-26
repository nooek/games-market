const gamesEntity = require("../../../entities/games/index")

module.exports = class CreateGameUsecase {
  constructor (gameDb) {
    this.gameDb = gameDb
  }

  async create(gameInfo) {
    const game = gamesEntity.validate(gameInfo)
    if (!gameInfo.devId) {
      throw new this.MissingParamError("DevId", "An error occurred, try again later")
    }
    return await this.gameDb.createGame({
      id: game.getId(),
      devId: gameInfo.devId,
      devGamesId: game.getDevGamesId(),
      name: game.getName(),
      description: game.getDescription(),
      thumbnail: game.getThumbnail(),
      game: game.getGame(),
      price: game.getPrice(),
      owner: game.getOwner(),
      categories: game.getCategories()
    })
  }
}
