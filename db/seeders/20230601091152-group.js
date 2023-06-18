'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('groups', [
      {
        id: 1,
        title: '34',
        academic_plan_id: 1,
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('groups_id_seq', 1)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('groups', null, {});
  },
};
