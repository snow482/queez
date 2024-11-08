'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('QuestionsAnswers', [
      {
        theme_id: 1,
        question: 'Цвет кошки?',
        answer: 'Зеленый'
      },
      {
        theme_id: 1,
        question: 'Цвет кошки?',
        answer: 'Зеленый'
      },
      {
        theme_id: 1,
        question: 'Цвет кошки?',
        answer: 'Зеленый'
      }, 
      {
        theme_id: 2,
        question: 'Цвет кошки?',
        answer: 'Зеленый'
      },
      {
        theme_id: 2,
        question: 'Цвет кошки?',
        answer: 'Зеленый'
      },
      {
        theme_id: 2,
        question: 'Цвет кошки?',
        answer: 'Зеленый'
      }, 
      {
        theme_id: 3,
        question: 'Цвет кошки?',
        answer: 'Зеленый'
      },
      {
        theme_id: 3,
        question: 'Цвет кошки?',
        answer: 'Зеленый'
      },
      {
        theme_id: 3,
        question: 'Цвет кошки?',
        answer: 'Зеленый'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('QuestionsAnswers', null, {});
  }
};
