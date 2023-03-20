//need to install sequelize
//dragons table
//NEED TO DOUBLE CHECK these datatypes


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Dragon extends Model {
//     static associate({ User }) {
//       //user
//       SetTime.belongsTo(User, {
//         foreignKey: "user_uid",
//         as: "users"
//       })
//     }
//   }
//   Dragon.init({
//     dragon_uid: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     image: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     price: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     artist: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     description: {
//       type: DataTypes.STRING ,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     modelName: 'Dragon',
//     tableName: 'dragons',
//     timestamps: true
//   });
//   return SetTime;
// };