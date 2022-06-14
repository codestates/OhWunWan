'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ohwunwan_likes', [
      {
        id:1,
        user_id:4,
        ohwunwan_id:14,
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        id:2,
        user_id:3,
        ohwunwan_id:14,
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        id:3,
        user_id:1,
        ohwunwan_id:13,
        createdAt: '2022-06-03 20:00:00',
        updatedAt: '2022-06-03 20:00:00',
      },
      {
        id:4,
        user_id:2,
        ohwunwan_id:13,
        createdAt: '2022-06-04 20:00:00',
        updatedAt: '2022-06-04 20:00:00',
      }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ohwunwan_likes', null, {})
  }
};
