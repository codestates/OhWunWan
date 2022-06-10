'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id:1,
        kakao_id:2227222989,
        nickname: 'woonge_e',
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        kakao_id:2237242531,
        nickname: 'sunmyung',
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        kakao_id:2247242325,
        nickname: 'yungjun',
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        kakao_id:2237242621,
        nickname: 'eunukk',
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
