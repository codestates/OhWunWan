'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bench_1rm_respects', [
     {
      user_id: 1,
      bench_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      bench_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      bench_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      bench_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 1,
      bench_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },




     {
      user_id: 2,
      bench_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      bench_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      bench_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      bench_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      bench_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },


     {
      user_id: 3,
      bench_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      bench_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      bench_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      bench_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      bench_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },



     {
      user_id: 4,
      bench_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      bench_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      bench_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      bench_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 4,
      bench_1rm_id:5,
      createdAt: new Date(),
      updatedAt: new Date(),
     },



     {
      user_id: 5,
      bench_1rm_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      bench_1rm_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      bench_1rm_id:3,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 5,
      bench_1rm_id:4,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
    //  {
    //   user_id: 5,
    //   bench_1rm_id:5,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    //  },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bench_1rm_respects', null, {})
  }
};
