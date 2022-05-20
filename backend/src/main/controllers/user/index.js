const MakeHttpResponse = require("../factories/makeHttpResponse")
const RegisterController = require("./register")
const LoginController = require("./login")
const ChangeUsernameController = require("./changeUsername")
const ChangeEmailController = require("./changeEmail")
const ChangePasswordController = require("./changePassword")
const AuthController = require("./auth")
const { registerUsecase } = require("../../../domain/usecases/user/index")
const { loginUsecase } = require("../../../domain/usecases/user/index")
const { authUsecase } = require("../../../domain/usecases/user/index")
const { changeUsernameUsecase } = require("../../../domain/usecases/user/index")
const { changeEmailUsecase } = require("../../../domain/usecases/user/index")
const { changePasswordUsecase } = require("../../../domain/usecases/user/index")

const authController = new AuthController(authUsecase)
const registerController = new RegisterController(registerUsecase, MakeHttpResponse)
const loginController = new LoginController(loginUsecase, MakeHttpResponse)
const changeUsernameController = new ChangeUsernameController(changeUsernameUsecase, MakeHttpResponse)
const changeEmailController = new ChangeEmailController(changeEmailUsecase, MakeHttpResponse)
const changePasswordController = new ChangePasswordController(changePasswordUsecase, MakeHttpResponse)

module.exports = { 
  registerController,
  loginController, 
  authController,
  changeUsernameController,
  changeEmailController,
  changePasswordController
}
