'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'artistId',
        as: 'artist',
        })
      this.belongsTo(User,{
        foreignKey: 'buyerId',
        as:'buyer'
      })
    }
    toJSON() {
    return { ...this.get(), id: undefined, artistId: undefined }
    }
  }
  Pet.init({
    pet_uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Fearsome Wyrm"
    },
    images: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      sequelize,
      tableName: 'dragons',
      modelName: 'Pet',
    });
  return Pet;
};