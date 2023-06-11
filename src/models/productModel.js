module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validiate:{
          notNull:{
            msg:"Name must be required"
          }
        }
      },      
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validiate:{
          notNull:{
            msg:"model must be required"
          }
        }
      },
      groupID: {
        type: DataTypes.STRING,
        allowNull: false,
        validiate:{
          notNull:{
            msg:"groupID must be required"
          }
        }
      },
    });
    return product;
  };
  