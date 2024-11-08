'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      {
        theme: 'Кошки'
      },
      {
        theme: 'Собачки'
      },
      {
        theme: 'Хорьки'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  }
};
