const validator = require("validator");

module.exports = isEmailValid = (email) => {
  if (validator.isEmail(email)) {
    return true
  }
  return false
}
