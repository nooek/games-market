const GameCommentsDb = require("../../../infra2/gameComments")
const { MissingParamError } = require("../index")
const CreateGameCommentUsecase = require("./create")
const GetCommentsByGameUsecase = require("./getByGame")
const moment = require("moment");

const gameCommentsDb = new GameCommentsDb()

const createGameCommentUsecase = new CreateGameCommentUsecase(gameCommentsDb, moment)
const getCommentsByGameUsecase = new GetCommentsByGameUsecase(gameCommentsDb, MissingParamError)

module.exports = { createGameCommentUsecase, getCommentsByGameUsecase }
