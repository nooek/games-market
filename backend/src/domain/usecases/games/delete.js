module.exports = class DeleteUsecase {
  constructor(gameDb, userDb, Encrypter, MissingParamError, InvalidParamError) {
    this.gameDb = gameDb;
    this.userDb = userDb;
    this.Encrypter = Encrypter;
    this.MissingParamError = MissingParamError;
    this.InvalidParamError = InvalidParamError;
  }

  async delete(data) {
    console.log(data)
    if (!data.userId) throw new this.MissingParamError("UserId", "An error occurred, please try again later");
    if (!data.gameId) throw new this.MissingParamError("GameId", "An error occurred, please try again later");
    if (!data.password) throw new this.MissingParamError("Password", "Password is required");

    const exists = await this.userDb.findById(data.userId)
    
    const isPwdEqual = await new this.Encrypter(data.password).compare(exists[0].dataValues.password)
    if (!isPwdEqual) {
      throw new this.InvalidParamError("Credentials", "The credentials does not match");
    }

    return await this.gameDb.delete(data.gameId)
  }
}