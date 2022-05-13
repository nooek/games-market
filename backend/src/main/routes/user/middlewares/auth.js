const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    const token = req.header('access-token')

    if (!token) {
      req.error = { message: "User is not authenticaded", authenticated: false }
    } else {
      jwt.verify(token, process.env.TOKEN_KEY, (err, decode) => {
        if (err) {
          req.error = { err, authenticated: false }
        } else {
          req.userId = decode.user
          req.authenticated = true
        }
      })
    }
    return next()
}

module.exports = auth;
