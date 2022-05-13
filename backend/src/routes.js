const userRouter = require("./main/routes/user/user")
const gamesRouter = require("./main/routes/games/games")
const developerRouter = require("./main/routes/developer/developer")
const commentsRouter = require("./main/routes/gameComments/gameComments")

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Please, go to /api")
  })
  app.get("/api", (req, res) => {
    res.send("hello world")
  })
  app.use("/api/userr", userRouter)
  app.use("/api/gamess", gamesRouter)
  app.use("/api/devv", developerRouter)
  app.use("/api/commentss", commentsRouter)
}
