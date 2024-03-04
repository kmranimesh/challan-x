'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: true,
        type: Sequelize.STRING(20)
      },
      lastName: {
        allowNull: true,
        type: Sequelize.STRING(20)
      },
      phone: {
        allowNull:true,
        type: Sequelize.INTEGER(10)
      },
      email: {
        allowNull:true,
        type: Sequelize.STRING
      },
      password: {
        allowNull:true,
        type: Sequelize.STRING(256)
      },
      reEnterPassword: {
        allowNull:true,
        type: Sequelize.STRING(256)
      },
      location: {
        allowNull:true,
        type: Sequelize.STRING(256)
      },
      dateOfBirth: {
        allowNull:true,
        type: Sequelize.DATE
      },
      profilePic: {
        allowNull:true,
        type: Sequelize.STRING(4000)
      },
      adhaarNumber: {
        allowNull:true,
        type: Sequelize.INTEGER(15)
      },
      offenceImage: {
        allowNull:true,
        type: Sequelize.STRING(4000)
      },
      LocationOfOffence: {
        allowNull:true,
        type: Sequelize.STRING(4000)
      },
      vehcileNumber: {
        allowNull:true,
        type: Sequelize.STRING(256)
      },
      comments: {
        allowNull:true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};