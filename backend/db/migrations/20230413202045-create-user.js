"use strict";
/** @type {import('sequelize-cli').Migration} */

//define schema name for Postgre in the options object
//because postgres uses options
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Users", //Users is the schema name
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        firstName: {
          type: Sequelize.STRING(30),
        },
        lastName: {
          type: Sequelize.STRING(30),
        },
        username: {
          type: Sequelize.STRING(30), //30 limit
          allowNull: false,
          unique: true,
        },
        email: {
          type: Sequelize.STRING(256), //256 limit
          allowNull: false,
          unique: true,
        },
        hashedPassword: {
          type: Sequelize.STRING.BINARY, //binary string
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },
  down: async (queryInterface, Sequelize) => {
    options.tableName = "Users"; //add options to down
    return queryInterface.dropTable(options);
  },
};
