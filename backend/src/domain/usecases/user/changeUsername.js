module.exports = class ChangeUsernameUsecase {
  constructor(userDb) {
    this.userDb = userDb;
  }

  async change(user) {
    if (!user.newUsername) throw new Error("Please provide the new username");
    if (!user.user_id) throw new Error("The user id is required")

    if (user.newUsername.length < 2) {
      throw new Error("Username must be at least 2 characters long.");
    }

    return await this.userDb.changeUsername({
      user_id: user.user_id,
      newUsername: user.newUsername
    })
  }
};
