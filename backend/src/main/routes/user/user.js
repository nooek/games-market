const express = require("express")
const route = express.Router()
const { registerController } = require("../../controllers/user/index")
const { loginController } = require("../../controllers/user/index")
const { authController } = require("../../controllers/user/index")
const { changeUsernameController } = require("../../controllers/user/index")
const { changeEmailController } = require("../../controllers/user/index")
const { changePasswordController } = require("../../controllers/user/index")
const HttpsAdapter = require("../../adapter/httpsAdapter")
const auth = require("./middlewares/auth")

route.get('/auth', auth, new HttpsAdapter(authController).adapt())
route.post('/register', new HttpsAdapter(registerController).adapt())
route.post('/login', new HttpsAdapter(loginController).adapt())
route.patch('/changeusername', new HttpsAdapter(changeUsernameController).adapt())
route.patch('/changeemail', new HttpsAdapter(changeEmailController).adapt())
route.patch('/changepassword', new HttpsAdapter(changePasswordController).adapt())

module.exports = route
