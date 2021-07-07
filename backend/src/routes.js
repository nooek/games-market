const userRouter = require("./routes/user/user")

module.exports = (app) => {
  app.get("/api", (req, res) => {
    res.send("hello world")
  })
  app.use("/api/user", userRouter)
}
