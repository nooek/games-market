const express = require("express")
const route = express.Router()
const HttpsAdapter = require("../../adapter/httpsAdapter")

const { createDevController, getDevController } = require("../../controllers/developer/index")

route.post("/", new HttpsAdapter(createDevController).adapt())
route.get("/:id", new HttpsAdapter(getDevController).adapt())

module.exports = route
