'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('student_subgroups', [
      {
        id: 1,
        student_id: 1,
        subgroup_id: 1,
      },
      {
        id: 2,
        student_id: 2,
        subgroup_id: 1,
      },
      {
        id: 3,
        student_id: 3,
        subgroup_id: 1,
      },
      {
        id: 4,
        student_id: 4,
        subgroup_id: 1,
      },
      {
        id: 5,
        student_id: 5,
        subgroup_id: 1,
      },
      {
        id: 6,
        student_id: 6,
        subgroup_id: 1,
      },
      {
        id: 7,
        student_id: 7,
        subgroup_id: 1,
      },
      {
        id: 8,
        student_id: 8,
        subgroup_id: 1,
      },
      {
        id: 9,
        student_id: 9,
        subgroup_id: 1,
      },
      {
        id: 10,
        student_id: 10,
        subgroup_id: 1,
      },
      {
        id: 11,
        student_id: 11,
        subgroup_id: 1,
      },
      {
        id: 12,
        student_id: 12,
        subgroup_id: 1,
      },
      {
        id: 13,
        student_id: 13,
        subgroup_id: 2,
      },
      {
        id: 14,
        student_id: 14,
        subgroup_id: 2,
      },
      {
        id: 15,
        student_id: 15,
        subgroup_id: 2,
      },
      {
        id: 16,
        student_id: 16,
        subgroup_id: 2,
      },
      {
        id: 17,
        student_id: 17,
        subgroup_id: 2,
      },
      {
        id: 18,
        student_id: 18,
        subgroup_id: 2,
      },
      {
        id: 19,
        student_id: 19,
        subgroup_id: 2,
      },
      {
        id: 20,
        student_id: 20,
        subgroup_id: 2,
      },
      {
        id: 21,
        student_id: 21,
        subgroup_id: 2,
      },
      {
        id: 22,
        student_id: 22,
        subgroup_id: 2,
      },
      {
        id: 23,
        student_id: 23,
        subgroup_id: 2,
      },
      {
        id: 24,
        student_id: 24,
        subgroup_id: 2,
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('student_subgroups_id_seq', 24)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('student_subgroups', null, {});
  },
};
