const { Sequelize, DataTypes } = require("sequelize");
const db = {};
const models = require("./main");
const sequelize = new Sequelize("pratice", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.user = models.user(sequelize, DataTypes);
    // db.sequelize.sync({ force: true });
    console.log("Database is configured successfully");
  })
  .catch((err) => {
    console.log(err);
  });

db.user = module.exports = db;
