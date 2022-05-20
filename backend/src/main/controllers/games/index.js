const { 
  createGameUsecase, 
  playGameUsecase, 
  rateGameUsecase, 
  checkPlayedUsecase,
  getGamesUsecase,
  filterGamesUsecase,
  getUserRatingUsecase
} = require("../../../domain/usecases/games/index")
const MakeHttpResponse = require("../factories/makeHttpResponse")
const CreateGameController = require("./create")
const PlayGameController = require("./play")
const RateGameController = require("./rate")
const CheckPlayedController = require("./checkPlayed")
const GetByIdController = require("./getById")
const GetByDevController = require("./devGames")
const FreeGamesController = require("./freeGames")
const BestRatedGamesController = require("./bestRatedGames")
const FilterGamesController = require("./filter")
const GetUserRatingController = require("./getUserRating")

const createGameController = new CreateGameController(createGameUsecase, MakeHttpResponse)
const playGameController = new PlayGameController(playGameUsecase, MakeHttpResponse)
const rateGameController = new RateGameController(rateGameUsecase, MakeHttpResponse)
const checkPlayedController = new CheckPlayedController(checkPlayedUsecase, MakeHttpResponse)
const getByIdController = new GetByIdController(getGamesUsecase, MakeHttpResponse)
const getByDevController = new GetByDevController(getGamesUsecase, MakeHttpResponse)
const freeGamesController = new FreeGamesController(getGamesUsecase, MakeHttpResponse)
const bestRatedGamesController = new BestRatedGamesController(getGamesUsecase, MakeHttpResponse)
const filterGamesController = new FilterGamesController(filterGamesUsecase, MakeHttpResponse)
const getUserRatingController = new GetUserRatingController(getUserRatingUsecase, MakeHttpResponse)

module.exports = { 
  createGameController, 
  playGameController, 
  rateGameController, 
  checkPlayedController,
  getByIdController,
  freeGamesController,
  bestRatedGamesController,
  filterGamesController,
  getUserRatingController,
  getByDevController
}
