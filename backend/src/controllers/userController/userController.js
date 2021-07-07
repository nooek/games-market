const { userModel } = require("../../models/index")
const uniqid = require("uniqid")

module.exports = {
  getUser: async (req, res) => {
    try {
      const allUsers = await userModel.findAll()
      res.status(200).json(allUsers)
    } catch(err) {
      res.status(400).json({error: err})
    }
  },
  createUser: async (req, res) => {
    try {
      const create = await userModel.create({
        id: uniqid(),
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
      })

      res.status(200).json({
        message: "user created successfully",
        dbReturn: create
      })
    } catch(err) {    
      res.status(400).json({error: err})
    }
  },
}
