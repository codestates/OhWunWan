'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Squat_1rm_comments', [
     {
      user_id: 1,
      squat_1rm_id:1,
      text_content: "대애바가각",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      squat_1rm_id:2,
      text_content: "대애바가각",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      squat_1rm_id:3,
      text_content: "대애바가각",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      squat_1rm_id:4,
      text_content: "대애바가각",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      squat_1rm_id:5,
      text_content: "대애바가각",
      createdAt: new Date(),
      updatedAt: new Date(),
     },



     {
      user_id: 3,
      squat_1rm_id:1,
      text_content: "이야 !!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      squat_1rm_id:2,
      text_content: "이야 !!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      squat_1rm_id:3,
      text_content: "이야 !!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      squat_1rm_id:4,
      text_content: "이야 !!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      squat_1rm_id:5,
      text_content: "이야 !!",
      createdAt: new Date(),
      updatedAt: new Date(),
     },



     {
      user_id: 4,
      squat_1rm_id:1,
      text_content: "개백샐",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      squat_1rm_id:2,
      text_content: "개백샐",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      squat_1rm_id:3,
      text_content: "개백샐",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      squat_1rm_id:4,
      text_content: "개백샐",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      squat_1rm_id:5,
      text_content: "개백샐",
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Squat_1rm_comments', null, {})
  }
};
