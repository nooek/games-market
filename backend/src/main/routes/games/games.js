const express = require("express")
const route = express.Router()
const HttpsAdapter = require("../../adapter/httpsAdapter")
const { 
  createGameController, 
  playGameController, 
  rateGameController, 
  checkPlayedController,
  getByIdController,
  freeGamesController,
  bestRatedGamesController,
  filterGamesController,
  getUserRatingController,
  getByDevController
} = require("../../controllers/games/index")

route.post("/", new HttpsAdapter(createGameController).adapt())
route.get("/get-game/:id", new HttpsAdapter(getByIdController).adapt())
route.get("/:dev", new HttpsAdapter(getByDevController).adapt())
route.post("/play", new HttpsAdapter(playGameController).adapt())
route.post("/rate", new HttpsAdapter(rateGameController).adapt())
route.get("/check-played/:userId/:gameId", new HttpsAdapter(checkPlayedController).adapt())
route.get("/free-games", new HttpsAdapter(freeGamesController).adapt())
route.get("/best-rated-games", new HttpsAdapter(bestRatedGamesController).adapt())
route.post("/filter", new HttpsAdapter(filterGamesController).adapt())
route.get("/get-user-rating/:gameId/:userId", new HttpsAdapter(getUserRatingController).adapt())

module.exports = route
