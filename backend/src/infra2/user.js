const { user } = require("../../models")

module.exports = class InfraUser {
  async register(user) {
    const register = await user.create({
      id: user.id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
    });
    return { dbResponse: register, ...user }
  }

  async findByEmail(email) {
    const userFound = await user.findOne({where: { email: email }});
    return [userFound]
  }

  async findById(id) {
    const userFound = await user.findOne({ where: { id: id }})
    return userFound
  }

  async changeUsername(data) {
    const nameUpdated = await user.update({ username: data.newUsername }, {
      where: { id: data.user_id }
    })
    return nameUpdated
  }

  async changeEmail(data) {
    const emailUpdated = await user.update({ email: data.newEmail }, {
      where: { id: data.user_id }
    })
    return emailUpdated
  }

  async changePassword(data) {
    const passwordUpdated = await user.update({ password: data.newPassword }, {
      where: { id: data.user_id }
    })
    return passwordUpdated
  }
};
