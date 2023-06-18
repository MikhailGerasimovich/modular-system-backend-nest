'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('teacher_disciplines', [
      {
        id: 1,
        class_type: 'lecture',
        teacher_id: 1,
        discipline_academic_plan_id: 1,
      },
      {
        id: 2,
        class_type: 'lecture',
        teacher_id: 1,
        discipline_academic_plan_id: 2,
      },
      {
        id: 3,
        class_type: 'laboratory',
        teacher_id: 1,
        discipline_academic_plan_id: 1,
      },
      {
        id: 4,
        class_type: 'laboratory',
        teacher_id: 1,
        discipline_academic_plan_id: 2,
      },
      {
        id: 5,
        class_type: 'lecture',
        teacher_id: 2,
        discipline_academic_plan_id: 4,
      },
      {
        id: 6,
        class_type: 'lecture',
        teacher_id: 2,
        discipline_academic_plan_id: 5,
      },
      {
        id: 7,
        class_type: 'lecture',
        teacher_id: 3,
        discipline_academic_plan_id: 3,
      },
      {
        id: 8,
        class_type: 'lecture',
        teacher_id: 4,
        discipline_academic_plan_id: 6,
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('teacher_disciplines_id_seq', 8)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('teacher_disciplines', null, {});
  },
};
