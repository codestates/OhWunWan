'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Squat_1rm_respects', [
     {
      user_id: 1,
      squat_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      squat_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      squat_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      squat_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      squat_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },




     {
      user_id: 2,
      squat_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      squat_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      squat_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      squat_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      squat_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },


     {
      user_id: 3,
      squat_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      squat_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      squat_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      squat_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      squat_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },



     {
      user_id: 4,
      squat_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      squat_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      squat_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      squat_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      squat_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },



     {
      user_id: 5,
      squat_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      squat_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      squat_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      squat_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      squat_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Squat_1rm_respects', null, {})
  }
};


