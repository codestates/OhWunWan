'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ohwunwan_comments', [
      {
        id:1,
        user_id:4,
        ohwunwan_id:15,
        text_content:"지기노",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        user_id:4,
        ohwunwan_id:14,
        text_content:"츠지기노",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        user_id:3,
        ohwunwan_id:14,
        text_content:"츠츠지기노",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        user_id:1,
        ohwunwan_id:13,
        text_content:"츠츠츠지기노",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ohwunwan_comments', null, {})
  }
};
