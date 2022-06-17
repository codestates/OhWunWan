'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ohwunwans', [
      {
        user_id: 1,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A51+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB1.png",
        text_content: "오운완완료!!",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 2,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB1.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 3,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB1.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 4,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB1.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 5,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB1.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-01 20:00:00',
        updatedAt: '2022-06-01 20:00:00',
      },
      {
        user_id: 1,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A51+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB2.png",
        text_content: "오운완완료 펌핑 굳",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 2,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB2.png",
        text_content: "펌핑 굳",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 3,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB2.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 4,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB2.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 5,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB2.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-02 20:00:00',
        updatedAt: '2022-06-02 20:00:00',
      },
      {
        user_id: 1,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A51+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB3.png",
        text_content: "오운완 완료!!!!",
        createdAt: '2022-06-03 20:00:00',
        updatedAt: '2022-06-03 20:00:00',
      },
      {
        user_id: 2,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB3.png",
        text_content: "오늘은쫌 빡셋네요!.",
        createdAt: '2022-06-03 20:00:00',
        updatedAt: '2022-06-03 20:00:00',
      },
      {
        user_id: 3,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB3.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-03 20:00:00',
        updatedAt: '2022-06-03 20:00:00',
      },
      {
        user_id: 4,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB3.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-03 20:00:00',
        updatedAt: '2022-06-03 20:00:00',
      },
      {
        user_id: 5,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB3.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-03 20:00:00',
        updatedAt: '2022-06-03 20:00:00',
      },
      {
        user_id: 1,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A51+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB4.png",
        text_content: "날씨좋네요!",
        createdAt: '2022-06-04 20:00:00',
        updatedAt: '2022-06-04 20:00:00',
      },
      {
        user_id: 2,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A52+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB4.png",
        text_content: "오운완완료",
        createdAt: '2022-06-04 20:00:00',
        updatedAt: '2022-06-04 20:00:00',
      },
      {
        user_id: 3,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A53+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB4.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-04 20:00:00',
        updatedAt: '2022-06-04 20:00:00',
      },
      {
        user_id: 4,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A54+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB4.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-04 20:00:00',
        updatedAt: '2022-06-04 20:00:00',
      },
      {
        user_id: 5,
        picture: "https://ohwunwan-multer.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%84%83%E1%85%A5/%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB/%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A55+%E1%84%8B%E1%85%A9%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%AA%E1%86%AB4.png",
        text_content: "오운완 완료",
        createdAt: '2022-06-04 20:00:00',
        updatedAt: '2022-06-04 20:00:00',
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ohwunwans', null, {})
  }
};

