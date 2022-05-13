module.exports = class MakeRegister {
  constructor (isEmailValid, idGen) {
    this.isEmailValid = isEmailValid;
    this.idGen = idGen
  }
  
  validate(user) {
    console.log(user)
    
    if (!user.username) {
      throw new Error('Username is required.')
    }
    if (user.username.length < 2) {
      throw new Error('Username must be at least 2 characters long.')
    }
    if (!user.firstname) {
      throw new Error('Firstname is required.')
    }
    if (!user.lastname) {
      throw new Error('Lastname is required.')
    }
    if (!user.email) {
      throw new Error('Email is required.')
    }
    if (!this.isEmailValid(user.email)) {
      throw new Error('Email is invalid.')
    }
    if (!user.password) {
      throw new Error('Password is required')
    }
    if (user.password.length < 6 || !/\d/.test(user.password)) {
      throw new Error("The password must have more than 6 characters and a number");
    }
    return {
      getId: () => this.idGen(),
      getUsername: () => user.username,
      getFirstname: () => user.firstname,
      getLastname: () => user.lastname,
      getEmail: () => user.email,
      getPassword: () => user.password
    }
  }
}
