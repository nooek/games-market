const developerEntity = require("../../../entities/developer/index")

module.exports = class CreateDevUsecase{
  constructor(devDb) {
    this.devDb = devDb;
  }

  async create(developer) {
    const dev = developerEntity.validate(developer)

    return await this.devDb.create({
      id: dev.getId(),
      userId: dev.getUserId()
    })
  }
}
