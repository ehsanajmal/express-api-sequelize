const { Sequelize, DataTypes } = require("sequelize");
const db = {};
const models = require("./main");
const sequelize = new Sequelize("practice", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.user = models.user(sequelize, DataTypes);
    db.group = models.group(sequelize, DataTypes);
    db.product = models.product(sequelize, DataTypes);
    // db.sequelize.sync({ force: true });
    console.log("Database is configured successfully");
  })
  .catch((err) => {
    console.log(err);
  });
console.log(db);
module.exports = db