'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ohwunwans', [
      {
        user_id:1,
        picture: "./1.png",
        text_content:"오운완 황지웅",
        createdAt:  '2022-06-01 20:00:00',
        updatedAt:  '2022-06-01 20:00:00',
      },
      {
        user_id:2,
        picture: "./2.png",
        text_content:"오운완 유선명",
        createdAt:  '2022-06-02 20:00:00',
        updatedAt:  '2022-06-02 20:00:00',
      },
      {
        user_id:3,
        picture: "./3.png",
        text_content:"오운완 유영준",
        createdAt:  '2022-06-03 20:00:00',
        updatedAt:  '2022-06-03 20:00:00',
      },
      {
        user_id:4,
        picture: "./4.png",
        text_content:"오운완 김은욱",
        createdAt:  '2022-06-04 20:00:00',
        updatedAt:  '2022-06-04 20:00:00',
      },{
        user_id:1,
        picture: "./1.png",
        text_content:"오운완 황지웅",
        createdAt:  '2022-06-05 20:00:00',
        updatedAt:  '2022-06-05 20:00:00',
      },
      {
        user_id:2,
        picture: "./2.png",
        text_content:"오운완 유선명",
        createdAt:  '2022-06-06 20:00:00',
        updatedAt:  '2022-06-06 20:00:00',
      },
      {
        user_id:3,
        picture: "./3.png",
        text_content:"오운완 유영준",
        createdAt:  '2022-06-07 20:00:00',
        updatedAt:  '2022-06-07 20:00:00',
      },
      {
        user_id:4,
        picture: "./4.png",
        text_content:"오운완 김은욱",
        createdAt:  '2022-06-08 20:00:00',
        updatedAt:  '2022-06-08 20:00:00',
      },{
        user_id:1,
        picture: "./1.png",
        text_content:"오운완 황지웅",
        createdAt:  '2022-06-09 20:00:00',
        updatedAt:  '2022-06-09 20:00:00',
      },
      {
        user_id:2,
        picture: "./2.png",
        text_content:"오운완 유선명",
        createdAt:  '2022-06-10 20:00:00',
        updatedAt:  '2022-06-10 20:00:00',
      },
      {
        user_id:3,
        picture: "./3.png",
        text_content:"오운완 유영준",
        createdAt:  '2022-06-11 20:00:00',
        updatedAt:  '2022-06-11 20:00:00',
      },
      {
        user_id:4,
        picture: "./4.png",
        text_content:"오운완 김은욱",
        createdAt:  '2022-06-12 20:00:00',
        updatedAt:  '2022-06-12 20:00:00',
      },{
        user_id:1,
        picture: "./1.png",
        text_content:"오운완 황지웅",
        createdAt:  '2022-06-13 20:00:00',
        updatedAt:  '2022-06-013 20:00:00',
      },
      {
        user_id:2,
        picture: "./2.png",
        text_content:"오운완 유선명",
        createdAt:  '2022-06-14 20:00:00',
        updatedAt:  '2022-06-14 20:00:00',
      },
      {
        user_id:3,
        picture: "./3.png",
        text_content:"오운완 유영준",
        createdAt:  '2022-06-15 20:00:00',
        updatedAt:  '2022-06-15 20:00:00',
      },
      {
        user_id:4,
        picture: "./4.png",
        text_content:"오운완 김은욱",
        createdAt:  '2022-06-16 20:00:00',
        updatedAt:  '2022-06-16 20:00:00',
      },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ohwunwans', null, {})
  }
};

