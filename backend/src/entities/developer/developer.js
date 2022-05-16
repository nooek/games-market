module.exports = class DeveloperEntity {
  constructor(idGen, MissingParamError) {
    this.idGen = idGen;
    this.MissingParamError = MissingParamError;
  }

  validate(developer) {
    if (!developer.userId) throw new this.MissingParamError("UserId", "An error occurred, please try again later")

    return {
      getId: () => this.idGen(),
      getUserId: () => developer.userId
    }
  }
}
