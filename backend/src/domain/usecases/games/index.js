const uniqid = require("uniqid")
const GameDb = require("../../../infra2/games.js")
const UserDb = require("../../../infra2/user")
const Encrypter = require("../../../utils/encrypter")
const { MissingParamError, InvalidParamError } = require("../index")
const CreateGameUsecase = require("./create")
const PlayGameUsecase = require("./play")
const RateGameUsecase = require("./rate")
const CheckPlayedUsecase = require("./checkPlayed")
const GetGamesUsecase = require("./getGames")
const FilterGamesUsecase = require("./filter")
const GetUserRatingUsecase = require("./getUserRating")
const DeleteUsecase = require("./delete")

const gameDb = new GameDb()
const userDb = new UserDb()

const createGameUsecase = new CreateGameUsecase(gameDb)
const playGameUsecase = new PlayGameUsecase(gameDb, uniqid, MissingParamError)
const rateGameUsecase = new RateGameUsecase(gameDb, uniqid, MissingParamError)
const checkPlayedUsecase = new CheckPlayedUsecase(gameDb, MissingParamError)
const getGamesUsecase = new GetGamesUsecase(gameDb, MissingParamError)
const filterGamesUsecase = new FilterGamesUsecase(gameDb)
const getUserRatingUsecase = new GetUserRatingUsecase(gameDb, MissingParamError)
const deleteUsecase = new DeleteUsecase(gameDb, userDb, Encrypter, MissingParamError, InvalidParamError)

module.exports = { 
  createGameUsecase,
  playGameUsecase,
  rateGameUsecase,
  checkPlayedUsecase,
  getGamesUsecase,
  filterGamesUsecase,
  getUserRatingUsecase,
  deleteUsecase
}
