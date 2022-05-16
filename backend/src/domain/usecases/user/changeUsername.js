module.exports = class ChangeUsernameUsecase {
  constructor(userDb, MissingParamError, InvalidParamError) {
    this.userDb = userDb;
    this.MissingParamError = MissingParamError;
    this.InvalidParamError = InvalidParamError;
  }

  async change(user) {
    if (!user.newUsername) throw new this.MissingParamError("New Username", "You need to provide the new username");
    if (!user.user_id) throw new this.MissingParamError("UserId", "An error occurred, please try again later");

    if (user.newUsername.length < 3) {
      throw new this.InvalidParamError("Username", "The name must be longer than 3 characters")    
    }

    return await this.userDb.changeUsername({
      user_id: user.user_id,
      newUsername: user.newUsername
    })
  }
};
