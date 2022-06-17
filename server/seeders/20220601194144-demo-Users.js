'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id:1,
        kakao_id:2227222989,
        nickname: '우형재',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A51+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        kakao_id:2237242531,
        nickname: '김민수',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        kakao_id:2247242325,
        nickname: '황철순',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        kakao_id:2237242621,
        nickname: '말왕',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:5,
        kakao_id:2227224929,
        nickname: '김계란',
        profile_picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
