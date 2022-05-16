const uniqid = require("uniqid")
const { InvalidParamError, MissingParamError } = require("../../utils/errors/index")
const GameCommentsEntity = require("./gameComments")

const gameCommentsEntity = new GameCommentsEntity(uniqid, InvalidParamError, MissingParamError)

module.exports = gameCommentsEntity
