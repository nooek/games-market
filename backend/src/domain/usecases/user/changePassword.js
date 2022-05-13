module.exports = class ChangePasswordUsecase {
  constructor(userDb, Encrypter) {
    this.userDb = userDb;
    this.Encrypter = Encrypter;
  }

  async change(user) {
    if (!user.user_id) throw new Error("The user id is required")
    if (!user.newPassword) throw new Error("Please provide the new password")
    if (user.newPassword.length < 6 || !/\d/.test(user.newPassword)) {
      throw new Error("The password must have more than 6 characters and a number");
    }

    const hashedPwd = await new this.Encrypter(user.newPassword).encrypt()

    return await this.userDb.changePassword({
      user_id: user.user_id,
      newPassword: hashedPwd
    })
  }
}