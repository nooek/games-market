const { Sequelize } = require("sequelize");

const hostConfig = {
  host: "127.0.0.1",
  dialect: "mysql",
}

const sequelize = new Sequelize("games_market", "root", "", hostConfig);

const verifyConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", error);
  }
};

verifyConnection();

module.exports = sequelize;
