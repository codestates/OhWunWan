'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ohwunwans', [
      {
        id:1,
        user_id:1,
        picture: "./1.png",
        text_content:"오운완 황지웅",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        user_id:2,
        picture: "./2.png",
        text_content:"오운완 유선명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        user_id:3,
        picture: "./3.png",
        text_content:"오운완 유영준",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        user_id:4,
        picture: "./4.png",
        text_content:"오운완 김은욱",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:5,
        user_id:2,
        picture: "./2.png",
        text_content:"오운완 유선명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:6,
        user_id:2,
        picture: "./2.png",
        text_content:"오운완 유선명",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};

