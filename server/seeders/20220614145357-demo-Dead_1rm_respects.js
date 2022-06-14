'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dead_1rm_respects', [
     {
      user_id: 1,
      dead_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      dead_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      dead_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      dead_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      dead_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },




     {
      user_id: 2,
      dead_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      dead_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      dead_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      dead_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      dead_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },


     {
      user_id: 3,
      dead_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      dead_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      dead_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      dead_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      dead_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },



     {
      user_id: 4,
      dead_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      dead_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      dead_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      dead_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      dead_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },



     {
      user_id: 5,
      dead_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      dead_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      dead_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      dead_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      dead_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dead_1rm_respects', null, {})
  }
};

