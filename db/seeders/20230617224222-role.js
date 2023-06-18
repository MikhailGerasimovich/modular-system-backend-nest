'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('roles', [
      {
        id: 1,
        title: 'ADMIN',
      },
      {
        id: 2,
        title: 'TEACHER',
      },
      {
        id: 3,
        title: 'STUDENT',
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('roles_id_seq', 3)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('roles', null, {});
  },
};
