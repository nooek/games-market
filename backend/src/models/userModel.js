const { DataTypes } = require("sequelize")
const db = require("../database/db")
const uniqid = require("uniqid")

const User = db.define('user', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: uniqid('id_')
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: uniqid('user_'),
    validate: {
      max: {
        args: [32],
        msg: "The maximum is 32 characters"
      },
      min: {
        args: [1],
        msg: "The minimum is 1 characters"
      }
    }
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  freezeTableName: true,
})

module.exports = User
