'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Feedback_likes', [
     {
      user_id: 1,
      feedback_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      feedback_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      feedback_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      feedback_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Feedback_likes', null, {})
  }
};
