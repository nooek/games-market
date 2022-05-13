module.exports = (sequelize, DataTypes) => {
  const Developer = sequelize.define("developer", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  },);

  Developer.associate = (models) => {
    Developer.hasMany(models.dev_games, {
      foreignKey: "dev_id",
      onDelete: "cascade",
    })
  }
  return Developer;
};
