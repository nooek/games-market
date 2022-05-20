const { createDevUsecase, getDevUsecase } = require("../../../domain/usecases/developer/index")
const MakeHttpResponse = require("../factories/makeHttpResponse")
const CreateDevController = require("./create")
const GetDevController = require("./get")

const createDevController = new CreateDevController(createDevUsecase, MakeHttpResponse)
const getDevController = new GetDevController(getDevUsecase, MakeHttpResponse)

module.exports = { createDevController, getDevController }
