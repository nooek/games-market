const uniqid = require("uniqid");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: uniqid("user_"),
        validate: {
          max: {
            args: [32],
            msg: "The maximum is 32 characters",
          },
          min: {
            args: [1],
            msg: "The minimum is 1 characters",
          },
        },
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
      },
    },
    {
      freezeTableName: true,
    },
  );
  User.associate = (models) => {
    User.hasOne(models.developer, {
      foreignKey: "user_id",
      onDelete: "cascade",
    });
    User.hasOne(models.played_games, {
      foreignKey: "user_id",
      onDelete: "cascade"
    })
    User.hasOne(models.rated_games, {
      foreignKey: 'user_id',
      onDelete: 'cascade'
    })
    User.hasMany(models.Comments, {
      foreignKey: 'user_id',
      onDelete: 'cascade'
    })
  }
  return User;
};
