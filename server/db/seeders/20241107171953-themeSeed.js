'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [
      {
        theme: 'Wellcum to Frontend'
      },
      {
        theme: 'Перед выходными'
      },
      {
        theme: 'Глупые и смешные'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  }
};
