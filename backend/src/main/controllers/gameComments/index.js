const { createGameCommentUsecase, getCommentsByGameUsecase } = require("../../../domain/usecases/gameComments/index")
const CreateGameCommentController = require("./create")
const GetCommentsByGameController = require("./getByGame")

const createGameCommentController = new CreateGameCommentController(createGameCommentUsecase)
const getCommentsByGameController = new GetCommentsByGameController(getCommentsByGameUsecase)

module.exports = { createGameCommentController, getCommentsByGameController }
