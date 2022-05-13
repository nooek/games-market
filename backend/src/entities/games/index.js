const gameCategoriesList = require("../../categories")
const uniqid = require("uniqid")
const GameEntity = require("./game")

const gameEntity = new GameEntity(gameCategoriesList, uniqid)

module.exports = gameEntity
