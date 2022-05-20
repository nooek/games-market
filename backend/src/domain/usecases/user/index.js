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

const registerUsecase = new RegisterUsecase(Encrypter, UserDb)
const loginUsecase = new LoginUsecase(Encrypter, TokenGenerator, UserDb, InvalidParamError)
const authUsecase = new AuthUsecase(new UserDb())
const changeUsernameUsecase = new ChangeUsernameUsecase(new UserDb(), MissingParamError, InvalidParamError)
const changeEmailUsecase = new ChangeEmailUsecase(new UserDb(), emailValidator, MissingParamError, InvalidParamError)
const changePasswordUsecase = new ChangePasswordUsecase(new UserDb(), Encrypter, MissingParamError, InvalidParamError)

module.exports = { 
  registerUsecase, 
  loginUsecase, 
  authUsecase,
  changeUsernameUsecase,
  changeEmailUsecase,
  changePasswordUsecase
}
