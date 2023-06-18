'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('teachers', [
      {
        id: 1,
        name: 'Сергей',
        surname: 'Ермоченко',
        patronymic: 'Александрович',
        department_id: 1,
      },
      {
        id: 2,
        name: 'Вадим',
        surname: 'Новый',
        patronymic: 'Владимирович',
        department_id: 1,
      },
      {
        id: 3,
        name: 'Сергей',
        surname: 'Сергеенко',
        patronymic: 'Владимирович',
        department_id: 1,
      },
      {
        id: 4,
        name: 'Александр',
        surname: 'Никитин',
        patronymic: 'Игоревич',
        department_id: 1,
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('teachers_id_seq', 4)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('teachers', null, {});
  },
};
