const gameCategoriesList = require("../../categories")
const uniqid = require("uniqid")
const { InvalidParamError, MissingParamError } = require("../../utils/errors/index")
const GameEntity = require("./game")

const gameEntity = new GameEntity(gameCategoriesList, uniqid, InvalidParamError, MissingParamError)

module.exports = gameEntity
