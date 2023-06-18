'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('subgroups', [
      {
        id: 1,
        title: '1',
        group_id: 1,
      },
      {
        id: 2,
        title: '2',
        group_id: 1,
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('subgroups_id_seq', 2)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('subgroups', null, {});
  },
};
