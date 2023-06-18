'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('academic_modules', [
      {
        id: 1,
        title: 'Изучение основ ООП применение их на практике. Патерны проектирования.',
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        discipline_academic_plan_id: 1,
      },
      {
        id: 2,
        title: 'Разработка и проектирование базы данных.',
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        discipline_academic_plan_id: 2,
      },
      {
        id: 3,
        title: 'Разработка информационной системы.',
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        discipline_academic_plan_id: 3,
      },
      {
        id: 4,
        title: 'Изучение протоколов передачи данных.',
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        discipline_academic_plan_id: 4,
      },
      {
        id: 5,
        title: 'Разработка утилит для операционной системы Linux.',
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        discipline_academic_plan_id: 5,
      },
      {
        id: 6,
        title: 'Изучение алгоритмов сортировок и структур данных.',
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        discipline_academic_plan_id: 6,
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('academic_modules_id_seq', 6)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('academic_modules', null, {});
  },
};
