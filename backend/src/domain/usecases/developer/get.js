module.exports = class GetUsecase {
  constructor(devDb) {
    this.devDb = devDb
  }

  async get(dev) {
    if (!dev.id) throw new Error("Id is required")

    const devFound = await this.devDb.get(dev.id)
    if (!devFound) return { dev: null, isDev: false }

    return { dev: devFound, isDev: true }
  }
}