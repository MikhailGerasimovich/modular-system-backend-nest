'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('departments', [
      {
        id: 1,
        title: 'Прикладного и Системного Программирования',
        short_title: 'ПиСП',
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('departments_id_seq', 1)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('departments', null, {});
  },
};
