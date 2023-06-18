'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('academic_plans', [
      {
        id: 1,
        recruitment_year: '2020',
        speciality_id: 1,
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('academic_plans_id_seq', 1)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('academic_plans', null, {});
  },
};
