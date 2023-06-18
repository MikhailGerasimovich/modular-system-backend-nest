'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('discipline_academic_plans', [
      {
        id: 1,
        semester: 6,
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        control_form: 'exam',
        discipline_id: 1,
        department_id: 1,
        academic_plan_id: 1,
      },
      {
        id: 2,
        semester: 6,
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        control_form: 'exam',
        discipline_id: 2,
        department_id: 1,
        academic_plan_id: 1,
      },
      {
        id: 3,
        semester: 6,
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        control_form: 'offset',
        discipline_id: 3,
        department_id: 1,
        academic_plan_id: 1,
      },
      {
        id: 4,
        semester: 6,
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        control_form: 'exam',
        discipline_id: 4,
        department_id: 1,
        academic_plan_id: 1,
      },
      {
        id: 5,
        semester: 6,
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        control_form: 'exam',
        discipline_id: 5,
        department_id: 1,
        academic_plan_id: 1,
      },
      {
        id: 6,
        semester: 6,
        lectures_number: 20,
        practical_number: 20,
        laboratory_number: 20,
        control_form: 'exam',
        discipline_id: 6,
        department_id: 1,
        academic_plan_id: 1,
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('discipline_academic_plans_id_seq', 6)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('discipline_academic_plans', null, {});
  },
};
