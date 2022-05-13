module.exports = class DeveloperEntity {
  constructor(idGen) {
    this.idGen = idGen
  }

  validate(developer) {
    if (!developer.userId) throw new Error("User Id is required")

    return {
      getId: () => this.idGen(),
      getUserId: () => developer.userId
    }
  }
}
