const { createDevUsecase, getDevUsecase } = require("../../../domain/usecases/developer/index")
const CreateDevController = require("./create")
const GetDevController = require("./get")

const createDevController = new CreateDevController(createDevUsecase)
const getDevController = new GetDevController(getDevUsecase)

module.exports = { createDevController, getDevController }
