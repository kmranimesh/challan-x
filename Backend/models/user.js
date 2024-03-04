'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.NUMBER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    re - enterPassword: DataTypes.STRING,
    location: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    adhaarNumber: DataTypes.NUMBER,
    offenceImage: DataTypes.STRING,
    LocationOfOffence: DataTypes.STRING,
    vehcileNumber: DataTypes.NUMBER,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};