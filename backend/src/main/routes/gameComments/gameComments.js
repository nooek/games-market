const express = require("express")
const route = express.Router()
const HttpsAdapter = require("../../adapter/httpsAdapter")

const { createGameCommentController, getCommentsByGameController } = require("../../controllers/gameComments/index")

route.post("/", new HttpsAdapter(createGameCommentController).adapt())
route.get("/:gameId", new HttpsAdapter(getCommentsByGameController).adapt())

module.exports = route
