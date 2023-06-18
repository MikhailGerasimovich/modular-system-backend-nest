'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('user_roles', [
      {
        id: 1,
        user_id: 1,
        role_id: 3,
      },
      {
        id: 2,
        user_id: 2,
        role_id: 3,
      },
      {
        id: 3,
        user_id: 3,
        role_id: 3,
      },
      {
        id: 4,
        user_id: 4,
        role_id: 3,
      },
      {
        id: 5,
        user_id: 5,
        role_id: 3,
      },
      {
        id: 6,
        user_id: 6,
        role_id: 3,
      },
      {
        id: 7,
        user_id: 7,
        role_id: 3,
      },
      {
        id: 8,
        user_id: 8,
        role_id: 3,
      },
      {
        id: 9,
        user_id: 9,
        role_id: 3,
      },
      {
        id: 10,
        user_id: 10,
        role_id: 3,
      },
      {
        id: 11,
        user_id: 11,
        role_id: 3,
      },
      {
        id: 12,
        user_id: 12,
        role_id: 3,
      },
      {
        id: 13,
        user_id: 13,
        role_id: 3,
      },
      {
        id: 14,
        user_id: 14,
        role_id: 3,
      },
      {
        id: 15,
        user_id: 15,
        role_id: 3,
      },
      {
        id: 16,
        user_id: 16,
        role_id: 3,
      },
      {
        id: 17,
        user_id: 17,
        role_id: 3,
      },
      {
        id: 18,
        user_id: 18,
        role_id: 3,
      },
      {
        id: 19,
        user_id: 19,
        role_id: 3,
      },
      {
        id: 20,
        user_id: 20,
        role_id: 3,
      },
      {
        id: 21,
        user_id: 21,
        role_id: 3,
      },
      {
        id: 22,
        user_id: 22,
        role_id: 3,
      },
      {
        id: 23,
        user_id: 23,
        role_id: 3,
      },
      {
        id: 24,
        user_id: 24,
        role_id: 3,
      },
      {
        id: 25,
        user_id: 25,
        role_id: 1,
      },
      {
        id: 26,
        user_id: 25,
        role_id: 2,
      },
      {
        id: 27,
        user_id: 26,
        role_id: 2,
      },
      {
        id: 28,
        user_id: 27,
        role_id: 2,
      },
      {
        id: 29,
        user_id: 28,
        role_id: 2,
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('user_roles_id_seq', 29)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('user_roles', null, {});
  },
};
