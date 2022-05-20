const { createGameCommentUsecase, getCommentsByGameUsecase } = require("../../../domain/usecases/gameComments/index")
const MakeHttpResponse = require("../factories/makeHttpResponse")
const CreateGameCommentController = require("./create")
const GetCommentsByGameController = require("./getByGame")

const createGameCommentController = new CreateGameCommentController(createGameCommentUsecase, MakeHttpResponse)
const getCommentsByGameController = new GetCommentsByGameController(getCommentsByGameUsecase, MakeHttpResponse)

module.exports = { createGameCommentController, getCommentsByGameController }
