//users table

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate({ Dragon }) {
//       // meet and greets
//       User.hasMany(Dragon,{
//         foreignKey: "user_uid",
//         as:"dragons"
//       })
//     }
//   }
//   User.init({
//     user_uid: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
// NEED TO DO RESEARCH ON THIS ONE
//     vendor:{
//       type: DataTypes.BOOLEAN,
//       allowNull: false
//   }, {
//     sequelize,
//     modelName: 'User',
//     tableName: 'users',
//     timestamps: true
//   });
//   return User;
// };