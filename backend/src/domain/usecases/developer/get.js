module.exports = class GetUsecase {
  constructor(devDb, MissingParamError) {
    this.devDb = devDb;
    this.MissingParamError = MissingParamError;
  }

  async get(dev) {
    if (!dev.id) throw new this.MissingParamError("Id", "An error occurred, please try again later")

    const devFound = await this.devDb.get(dev.id)
    if (!devFound) return { dev: null, isDev: false }

    return { dev: devFound, isDev: true }
  }
}
