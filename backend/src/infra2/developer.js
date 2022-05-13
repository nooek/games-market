const { developer } = require("../../models")

module.exports = class InfraDev {
  async create(dev) {
    const developerCreated = await developer.create({
      id: dev.id,
      user_id: dev.userId,
    });
    return developerCreated
  }

  async get(id) {
    const dev = await developer.findOne({ where: { user_id: id } })
    return dev
  }
};
