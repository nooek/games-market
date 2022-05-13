const isEmailValid = require("../../utils/validateEmail")
const uniqid = require("uniqid")
const MakeRegister = require("./register")

const makeRegister = new MakeRegister(isEmailValid, uniqid)

module.exports = makeRegister
