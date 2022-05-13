const uniqid = require("uniqid")
const GameCommentsEntity = require("./gameComments")

const gameCommentsEntity = new GameCommentsEntity(uniqid)

module.exports = gameCommentsEntity
