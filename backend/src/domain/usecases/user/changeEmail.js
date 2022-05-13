module.exports = class ChangeEmailUsecase {
  constructor(userDb, isEmailValid) {
    this.userDb = userDb;
    this.isEmailValid = isEmailValid;
  }

  async change(user) {
    console.log(user)
    if (!user.newEmail) throw new Error("Please provide the new email")
    if (!this.isEmailValid(user.newEmail)) throw new Error("Email is invalid")
    if (!user.user_id) throw new Error("The user id is required")

    return await this.userDb.changeEmail({
      user_id: user.user_id,
      newEmail: user.newEmail
    })
  }
}
