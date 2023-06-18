'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('disciplines', [
      {
        id: 1,
        title: 'Объектно ориентированные технологии програмиирования и стандарты проектирования',
        short_title: 'ООТПиСП',
      },
      {
        id: 2,
        title: 'Базы данных',
        short_title: 'БД',
      },
      {
        id: 3,
        title: 'Технологии разработки информационных систем',
        short_title: 'ТРИС',
      },
      {
        id: 4,
        title: 'Компьютерные системы и сети',
        short_title: 'КСиС',
      },
      {
        id: 5,
        title: 'Операционные системы и системное программирование',
        short_title: 'ОСиСП',
      },
      {
        id: 6,
        title: 'Алгоритмы и структуры данных',
        short_title: 'АиСД',
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('disciplines_id_seq', 6)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('disciplines', null, {});
  },
};
