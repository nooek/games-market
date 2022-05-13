const app = require("./index")
const db = require("../models")

db.sequelize.sync().then(() => {
  app.listen(3333, () => {
    console.log("Server running on port 3030")
  })
})
