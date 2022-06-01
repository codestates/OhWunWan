'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id:1,
        nickname: 'woonge_e',
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        nickname: 'sunmyung',
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        nickname: 'yungjun',
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        nickname: 'eunukk',
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
