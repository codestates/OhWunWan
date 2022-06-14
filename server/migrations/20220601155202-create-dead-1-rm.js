'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dead_1rms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "cascade",
        references: {
          model: "Users",
          key: "id",
        },
      },
      video: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      }, 
      text_content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kg: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dead_1rms');
  }
};