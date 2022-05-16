module.exports = class ChangePasswordUsecase {
  constructor(userDb, Encrypter, MissingParamError, InvalidParamError) {
    this.userDb = userDb;
    this.Encrypter = Encrypter;
    this.MissingParamError = MissingParamError;
    this.InvalidParamError = InvalidParamError;
  }

  async change(user) {
    if (!user.user_id) throw new this.MissingParamError("UserId", "An error occurred, please try again later");
    if (!user.newPassword) throw new this.MissingParamError("New Password", "You need to provide the new password")
    if (user.newPassword.length < 6 || !/\d/.test(user.newPassword)) {
      throw new this.InvalidParamError("Password", "The password must have more than 6 characters and a number");
    }

    const hashedPwd = await new this.Encrypter(user.newPassword).encrypt()

    return await this.userDb.changePassword({
      user_id: user.user_id,
      newPassword: hashedPwd
    })
  }
}