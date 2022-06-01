'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dead_1rm_comments', {
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
      dead_1rm_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "cascade",
        references: {
          model: "Dead_1rms",
          key: "id",
        },
      },
      text_content: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Dead_1rm_comments');
  }
};