module.exports = class LoginEntity {
  constructor(data) {
    this.data = data
  }

  validate() {
    if (!this.data.email) {
      throw new Error('Email is required.')
    }
    if (!this.data.password) {
      throw new Error('Password is required.')
    }
    return {
      getEmail: () => this.data.email,
      getPassword: () => this.data.password
    }
  }
}
