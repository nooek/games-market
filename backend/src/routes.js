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
  app.use("/api/user", userRouter)
  app.use("/api/games", gamesRouter)
  app.use("/api/dev", developerRouter)
  app.use("/api/comments", commentsRouter)
}
