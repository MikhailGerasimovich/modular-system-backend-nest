'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('specialties', [
      {
        id: 1,
        title: 'Программное обеспечение информационных технологий',
        short_title: 'ПОИТ',
      },
      {
        id: 2,
        title: 'Управление информационными ресурсами',
        short_title: 'УИР',
      },
      {
        id: 3,
        title: 'Компьютерная безопасность',
        short_title: 'КБ',
      },
      {
        id: 4,
        title: 'Программное обеспечение компьютерных систем',
        short_title: 'ПОКС',
      },
      {
        id: 5,
        title: 'Прикладная математика',
        short_title: 'ПМ',
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('specialties_id_seq', 5)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('specialties', null, {});
  },
};
