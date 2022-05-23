const LoginEntity = require("../../../entities/user/login")

module.exports = class LoginUsecase {
  constructor(Encrypter, TokenGenerator, UserDb, InvalidParamError) {
    this.Encrypter = Encrypter;
    this.TokenGenerator = TokenGenerator
    this.UserDb = UserDb;
    this.InvalidParamError = InvalidParamError;
  }
  
  async login(userData) {
    const user = await new LoginEntity(userData).validate()
    const userDb = new this.UserDb()
    const exists = await userDb.findByEmail(user.getEmail())

    if (exists.length <= 0 || exists[0] === null) throw new Error("User not found")
    const isPwdEqual = await new this.Encrypter(user.getPassword()).compare(exists[0].dataValues.password)
    if (!isPwdEqual) {
      throw new this.InvalidParamError("Credentials", "The credentials does not match");
    }

    const tokenGenerator = await new this.TokenGenerator({ user: exists[0].dataValues.id }).generate();
  
    return { data: exists[0].dataValues, token: tokenGenerator }
  }
}
