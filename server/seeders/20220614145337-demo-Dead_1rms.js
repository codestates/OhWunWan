'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dead_1rms', [
     {
      user_id: 1,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A51/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A51+%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3.mov",
      text_content: "180kg인증",
      kg:180,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3.mov",
      text_content: "200kg인증",
      kg:200,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%83%E1%85%B3%E1%86%BC.mov",
      text_content: "220 인증!",
      kg:220,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3+1rm.mov",
      text_content: "230인증",
      kg:230,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      video:"https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/1rm%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%83%E1%85%A6%E1%84%83%E1%85%B3.mov",
      text_content: "190인증",
      kg:190,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dead_1rms', null, {})
  }
};
