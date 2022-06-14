'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Feedbacks', [
     {
      id:1,
      user_id: 3,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%91%E1%85%B5%E1%84%83%E1%85%B3%E1%84%87%E1%85%A2%E1%86%A8%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53%E1%84%91%E1%85%B5%E1%84%83%E1%85%B3%E1%84%87%E1%85%A2%E1%86%A8.mov",
      text_content: "자세좀 봐주세요!",
      createdAt: new Date(),
      updatedAt: new Date(),
     }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Feedbacks', null, {})
  }
};
