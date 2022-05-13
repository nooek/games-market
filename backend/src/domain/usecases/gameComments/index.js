const GameCommentsDb = require("../../../infra2/gameComments")
const CreateGameCommentUsecase = require("./create")
const GetCommentsByGameUsecase = require("./getByGame")
const moment = require("moment");

const gameCommentsDb = new GameCommentsDb()

const createGameCommentUsecase = new CreateGameCommentUsecase(gameCommentsDb, moment)
const getCommentsByGameUsecase = new GetCommentsByGameUsecase(gameCommentsDb)

module.exports = { createGameCommentUsecase, getCommentsByGameUsecase }
