module.exports = class MakeRegister {
  constructor (isEmailValid, idGen, InvalidParamError, MissingParamError) {
    this.isEmailValid = isEmailValid;
    this.idGen = idGen;
    this.InvalidParamError = InvalidParamError;
    this.MissingParamError = MissingParamError;
  }
  
  validate(user) {
    console.log(this.InvalidParamError)
    
    if (!user.username) {
      throw new this.MissingParamError("Username", "Please provide your username")
    }
    if (user.username.length < 2) {
      throw new this.InvalidParamError("Username", "Username must be longer than 2 characters");
    }
    if (!user.firstname) {
      throw new this.MissingParamError("Firstname", "Please provide your firstname")
    }
    if (!user.lastname) {
      throw new this.MissingParamError("Lastname", "Please provide your lastname")
    }
    if (!user.email) {
      throw new this.MissingParamError("Email", "Please provide an email")
    }
    if (!this.isEmailValid(user.email)) {
      throw new this.InvalidParamError("Email", "The email provided is invalid");
    }
    if (!user.password) {
      throw new this.MissingParamError("Password", "Please provide an password")
    }
    if (user.password.length < 6 || !/\d/.test(user.password)) {
      throw new this.InvalidParamError("Password", "Password must contain numbers and be longer than 6 characters");
    }
    return {
      getId: () => this.idGen(),
      getUsername: () => user.username,
      getFirstname: () => user.firstname,
      getLastname: () => user.lastname,
      getEmail: () => user.email,
      getPassword: () => user.password
    }
  }
}
