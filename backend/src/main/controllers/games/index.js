const { 
  createGameUsecase, 
  playGameUsecase, 
  rateGameUsecase, 
  checkPlayedUsecase,
  getGamesUsecase,
  filterGamesUsecase,
  getUserRatingUsecase
} = require("../../../domain/usecases/games/index")
const CreateGameController = require("./create")
const PlayGameController = require("./play")
const RateGameController = require("./rate")
const CheckPlayedController = require("./checkPlayed")
const GetByIdController = require("./getById")
const FreeGamesController = require("./freeGames")
const BestRatedGamesController = require("./bestRatedGames")
const FilterGamesController = require("./filter")
const GetUserRatingController = require("./getUserRating")

const createGameController = new CreateGameController(createGameUsecase)
const playGameController = new PlayGameController(playGameUsecase)
const rateGameController = new RateGameController(rateGameUsecase)
const checkPlayedController = new CheckPlayedController(checkPlayedUsecase)
const getByIdController = new GetByIdController(getGamesUsecase)
const freeGamesController = new FreeGamesController(getGamesUsecase)
const bestRatedGamesController = new BestRatedGamesController(getGamesUsecase)
const filterGamesController = new FilterGamesController(filterGamesUsecase)
const getUserRatingController = new GetUserRatingController(getUserRatingUsecase)

module.exports = { 
  createGameController, 
  playGameController, 
  rateGameController, 
  checkPlayedController,
  getByIdController,
  freeGamesController,
  bestRatedGamesController,
  filterGamesController,
  getUserRatingController
}
