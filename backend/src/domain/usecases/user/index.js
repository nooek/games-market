const Encrypter = require("../../../utils/encrypter")
const TokenGenerator = require("../../../utils/tokenGenerator")
const emailValidator = require("../../../utils/validateEmail")
const UserDb = require("../../../infra2/user")
const { MissingParamError, InvalidParamError } = require("../index")
const RegisterUsecase = require("./registerUser")
const LoginUsecase = require("./login")
const AuthUsecase = require("./auth")
const ChangeUsernameUsecase = require("./changeUsername")
const ChangeEmailUsecase = require("./changeEmail")
const ChangePasswordUsecase = require("./changePassword")

const userDb = new UserDb()

const registerUsecase = new RegisterUsecase(Encrypter, UserDb)
const loginUsecase = new LoginUsecase(Encrypter, TokenGenerator, UserDb, InvalidParamError)
const authUsecase = new AuthUsecase(userDb)
const changeUsernameUsecase = new ChangeUsernameUsecase(userDb, MissingParamError, InvalidParamError)
const changeEmailUsecase = new ChangeEmailUsecase(userDb, emailValidator, MissingParamError, InvalidParamError)
const changePasswordUsecase = new ChangePasswordUsecase(userDb, Encrypter, MissingParamError, InvalidParamError)

module.exports = { 
  registerUsecase, 
  loginUsecase, 
  authUsecase,
  changeUsernameUsecase,
  changeEmailUsecase,
  changePasswordUsecase
}
