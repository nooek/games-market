const isEmailValid = require("../../utils/validateEmail")
const { InvalidParamError, MissingParamError } = require("../../utils/errors/index")
const uniqid = require("uniqid")
const MakeRegister = require("./register")

const makeRegister = new MakeRegister(isEmailValid, uniqid, InvalidParamError, MissingParamError)

module.exports = makeRegister
