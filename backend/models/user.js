'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Dragon}) {
      User.hasMany(Dragon, {
        foreignKey: "user_uid",
        as: "dragons"
    })
    }
  }
  User.init({
    user_uid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      default: sequelize.fn('uuid_generate_v4')
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
  });
  return User;
};