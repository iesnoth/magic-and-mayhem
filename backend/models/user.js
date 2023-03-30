'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Pet }) {
      //vendor association
      this.hasMany(Pet, { foreignKey: 'artistId', as: 'dragons' })
      //buyer association
      this.hasMany(Pet, { foreignKey: 'buyerId', as: 'adoptedDragons'})
    }
      
    // hides the id from the public
    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  User.init({
    user_uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'User must have a name' },
        notEmpty: { msg: 'Name must not be empty' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'User must have a email' },
        notEmpty: { msg: 'email must not be empty' },
        isEmail: { msg: 'Must be a valid e-mail address.' },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};