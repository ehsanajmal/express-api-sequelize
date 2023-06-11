module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
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
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validiate: {
        notNull: {
          msg: "Pincode is required"
        }
      }
    },
    signinid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validiate: {
        notNull: {
          msg: "SigninID is required"
        }
      }
    }
  });

  return user;
};
