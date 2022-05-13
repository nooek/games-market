module.exports = class AuthUsecase {
  constructor(userDb) {
    this.userDb = userDb
  }

  async auth(data) {
    console.log(data)

    if (data.error) throw new Error(data.error)

    const user = await this.userDb.findById(data.userId)

    if (user) return { user: user, authenticated: data.authenticated }
    throw new Error("User does not exist")
  }
}
