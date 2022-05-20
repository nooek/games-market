const { user } = require("../../models")

module.exports = class InfraUser {
  async register(userData) {
    const register = await user.create({
      id: userData.id,
      username: userData.username,
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      password: userData.password,
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
