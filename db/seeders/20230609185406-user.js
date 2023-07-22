'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('users', [
      {
        id: 1,
        login: 'Михаил',
        password: '2001290266',
      },
      {
        id: 2,
        login: 'Анна',
        password: '2001290265',
      },
      {
        id: 3,
        login: 'Никита',
        password: '2001290261',
      },
      {
        id: 4,
        login: 'Алексей',
        password: '2001290260',
      },
      {
        id: 5,
        login: 'Артем',
        password: '2001290259',
      },
      {
        id: 6,
        login: 'Илья',
        password: '2001290263',
      },
      {
        id: 7,
        login: 'Антон',
        password: '2001290256',
      },
      {
        id: 8,
        login: 'Николай',
        password: '2001290253',
      },
      {
        id: 9,
        login: 'Евгений',
        password: '2001290248',
      },
      {
        id: 10,
        login: 'Виктория',
        password: '2001290251',
      },
      {
        id: 11,
        login: 'Павел',
        password: '2001290257',
      },
      {
        id: 12,
        login: 'Александр',
        password: '2001290247',
      },
      {
        id: 13,
        login: 'Федор',
        password: '2001290264',
      },
      {
        id: 14,
        login: 'Евгений',
        password: '2001290262',
      },
      {
        id: 15,
        login: 'Никита',
        password: '2001290258',
      },
      {
        id: 16,
        login: 'Денис',
        password: '2001290255',
      },
      {
        id: 17,
        login: 'Владислав',
        password: '2001290254',
      },
      {
        id: 18,
        login: 'Глеб',
        password: '2001290252',
      },
      {
        id: 19,
        login: 'Дмитрий',
        password: '2001290250',
      },
      {
        id: 20,
        login: 'Иван',
        password: '2001290249',
      },
      {
        id: 21,
        login: 'Михаил',
        password: '2001290248',
      },
      {
        id: 22,
        login: 'Радислав',
        password: '2001290246',
      },
      {
        id: 23,
        login: 'Софья-Кристина',
        password: '2001290245',
      },
      {
        id: 24,
        login: 'Назарья',
        password: '2001290248',
      },
      {
        id: 25,
        login: 'Сергей',
        password: 'Ермоченко',
      },
      {
        id: 26,
        login: 'Вадим',
        password: 'Новый',
      },
      {
        id: 27,
        login: 'Сергей',
        password: 'Сергеенко',
      },
      {
        id: 28,
        login: 'Александр',
        password: 'Никитин',
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('users_id_seq', 28)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('users', null, {});
  },
};
