"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("product", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING
      }
    });
  },

  down: queryInterface => {
    queryInterface.dropTable("product");
  }
};
