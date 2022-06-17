'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bench_1rms', [
     {
      user_id: 1,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A51/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A51+%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B5.mov",
      text_content: "100kg인증",
      kg:100,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B5.mov",
      text_content: "120kg인증",
      kg:120,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%80%E1%85%A1%E1%84%89%E1%85%B3%E1%86%B7.mov",
      text_content: "130 인증!",
      kg:130,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%87%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B5+1rm.mov",
      text_content: "125인증",
      kg:125,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%89%E1%85%B3%E1%84%8F%E1%85%AF%E1%84%90%E1%85%B3.mov",
      text_content: "135인증",
      kg:135,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bench_1rms', null, {})
  }
};
