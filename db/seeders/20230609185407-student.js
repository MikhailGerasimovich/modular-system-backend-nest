'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generatedReacords = await queryInterface.bulkInsert('students', [
      {
        id: 1,
        name: 'Михаил',
        surname: 'Герасимович',
        patronymic: 'Андреевич',
        code: '2001290266',
      },
      {
        id: 2,
        name: 'Анна',
        surname: 'Щемелева',
        patronymic: 'Дмитриевна',
        code: '2001290265',
      },
      {
        id: 3,
        name: 'Никита',
        surname: 'Лабузов',
        patronymic: 'Андреевич',
        code: '2001290261',
      },
      {
        id: 4,
        name: 'Алексей',
        surname: 'Стасюк',
        patronymic: 'Евгеньевич',
        code: '2001290260',
      },
      {
        id: 5,
        name: 'Артем',
        surname: 'Цитович',
        patronymic: 'Викторович',
        code: '2001290259',
      },
      {
        id: 6,
        name: 'Илья',
        surname: 'Янчилин',
        patronymic: 'Дмитриевич',
        code: '2001290263',
      },
      {
        id: 7,
        name: 'Антон',
        surname: 'Царенко',
        patronymic: 'Сергеевич',
        code: '2001290256',
      },
      {
        id: 8,
        name: 'Николай',
        surname: 'Гладков',
        patronymic: 'Андреевич',
        code: '2001290253',
      },
      {
        id: 9,
        name: 'Евгений',
        surname: 'Скрага',
        patronymic: 'Иванович',
        code: '2001290248',
      },
      {
        id: 10,
        name: 'Виктория',
        surname: 'Изобова',
        patronymic: 'Владимировна',
        code: '2001290251',
      },
      {
        id: 11,
        name: 'Павел',
        surname: 'Папко',
        patronymic: 'Сергеевич',
        code: '2001290257',
      },
      {
        id: 12,
        name: 'Александр',
        surname: 'Пастухов',
        patronymic: 'Юрьевич',
        code: '2001290247',
      },
      {
        id: 13,
        name: 'Федор',
        surname: 'Костромитин',
        patronymic: 'Евгеньевич',
        code: '2001290264',
      },
      {
        id: 14,
        name: 'Евгений',
        surname: 'Шарко',
        patronymic: 'Сергеевич',
        code: '2001290262',
      },
      {
        id: 15,
        name: 'Никита',
        surname: 'Доморад',
        patronymic: 'Андреевич',
        code: '2001290258',
      },
      {
        id: 16,
        name: 'Денис',
        surname: 'Бобрик',
        patronymic: 'Викторович',
        code: '2001290255',
      },
      {
        id: 17,
        name: 'Владислав',
        surname: 'Васильев',
        patronymic: 'Сергеевич',
        code: '2001290254',
      },
      {
        id: 18,
        name: 'Глеб',
        surname: 'Дубовец',
        patronymic: 'Владимирович',
        code: '2001290252',
      },
      {
        id: 19,
        name: 'Дмитрий',
        surname: 'Колесникович',
        patronymic: 'Викторович',
        code: '2001290250',
      },
      {
        id: 20,
        name: 'Иван',
        surname: 'Куновский',
        patronymic: 'Валерьевич',
        code: '2001290249',
      },
      {
        id: 21,
        name: 'Михаил',
        surname: 'Москалев',
        patronymic: 'Александрович',
        code: '2001290248',
      },
      {
        id: 22,
        name: 'Радислав',
        surname: 'Пшонко',
        patronymic: 'Валерьевич',
        code: '2001290246',
      },
      {
        id: 23,
        name: 'Софья-Кристина',
        surname: 'Ремизова',
        patronymic: 'Алексеевна',
        code: '2001290245',
      },
      {
        id: 24,
        name: 'Назарья',
        surname: 'Сиренко',
        patronymic: 'Ивановна',
        code: '2001290248',
      },
    ]);

    await queryInterface.sequelize.query(`SELECT setval('students_id_seq', 24)`);

    return generatedReacords;
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('students', null, {});
  },
};
