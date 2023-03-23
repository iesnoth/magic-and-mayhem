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
      this.belongsTo(User, { foreignKey: 'artistId' })
    }

    // toJSON() {
    //   return { ...this.get(), id: undefined, artistId: undefined }
    // }
  }
  Pet.init({
    pet_uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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