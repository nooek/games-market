const uniqid = require("uniqid")
const GameDb = require("../../../infra2/games.js")
const CreateGameUsecase = require("./create")
const PlayGameUsecase = require("./play")
const RateGameUsecase = require("./rate")
const CheckPlayedUsecase = require("./checkPlayed")
const GetGamesUsecase = require("./getGames")
const FilterGamesUsecase = require("./filter")
const GetUserRatingUsecase = require("./getUserRating")

const createGameUsecase = new CreateGameUsecase(new GameDb())
const playGameUsecase = new PlayGameUsecase(new GameDb(), uniqid)
const rateGameUsecase = new RateGameUsecase(new GameDb(), uniqid)
const checkPlayedUsecase = new CheckPlayedUsecase(new GameDb())
const getGamesUsecase = new GetGamesUsecase(new GameDb())
const filterGamesUsecase = new FilterGamesUsecase(new GameDb())
const getUserRatingUsecase = new GetUserRatingUsecase(new GameDb())

module.exports = { 
  createGameUsecase,
  playGameUsecase,
  rateGameUsecase,
  checkPlayedUsecase,
  getGamesUsecase,
  filterGamesUsecase,
  getUserRatingUsecase
}
