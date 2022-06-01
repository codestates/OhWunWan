'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bench_1rm_respects', {
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
      bench_1rm_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "cascade",
        references: {
          model: "Bench_1rms",
          key: "id",
        },
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
    await queryInterface.dropTable('Bench_1rm_respects');
  }
};