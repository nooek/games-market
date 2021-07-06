const express = require("express")
const app = express()

require("./routes")(app)
require("./middlewares")(app)

module.exports = app
