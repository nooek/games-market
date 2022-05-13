const DevDb = require("../../../infra2/developer")
const CreateDevUsecase = require("./create")
const GetDevUsecase = require("./get")

const createDevUsecase = new CreateDevUsecase(new DevDb())
const getDevUsecase = new GetDevUsecase(new DevDb())

module.exports = { createDevUsecase, getDevUsecase }
