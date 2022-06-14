'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Feedback_comments', [
      {
        user_id: 1,
        feedback_id: 1,
        text_content: "완벽하십니다",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        feedback_id: 1,
        text_content: "완벽하십니다",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        feedback_id: 1,
        text_content: "팔이 수직으로 내려오게 신경쓰시면 좋을 것 같아요!!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        feedback_id: 1,
        text_content: "완벽하십니다",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Feedback_comments', null, {})
  }
};

