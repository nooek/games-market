module.exports = class ChangeEmailUsecase {
  constructor(userDb, isEmailValid, MissingParamError, InvalidParamError) {
    this.userDb = userDb;
    this.isEmailValid = isEmailValid;
    this.MissingParamError = MissingParamError;
    this.InvalidParamError = InvalidParamError;
  }

  async change(user) {
    if (!user.newEmail) throw new this.MissingParamError("New Email", "You need to provide the new username")
    if (!this.isEmailValid(user.newEmail)) throw new this.InvalidParamError("Email", "The email provided is invalid");
    if (!user.user_id) throw new this.MissingParamError("UserId", "An error occurred, please try again later");

    return await this.userDb.changeEmail({
      user_id: user.user_id,
      newEmail: user.newEmail
    })
  }
}
