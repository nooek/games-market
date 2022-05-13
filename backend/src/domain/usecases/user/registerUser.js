const makeRegister = require("../../../entities/user/index")

module.exports = class RegisterUsecase {
  constructor (Encrypter, UserDb) {
    this.Encrypter = Encrypter
    this.UserDb = UserDb
  }

  async register(userInfo) {
    const user = makeRegister.validate(userInfo)
    const userDb = new this.UserDb()
    let hashedPwd;
  
    const exists = await userDb.findByEmail(user.getEmail())
    hashedPwd = await new this.Encrypter(user.getPassword()).encrypt()
    if (exists.length > 0 || exists[0] !== null) throw new Error("User already exists")

    return await userDb.register({
      id: user.getId(),
      username: user.getUsername(),
      firstname: user.getFirstname(),
      lastname: user.getLastname(),
      email: user.getEmail(),
      password: hashedPwd
    })
  }
}
