'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('QuestionsAnswers', [
      {
        theme_id: 1,
        question: 'Какая операционная система на логотипе использует пингвина по имени Таня?',
        answer: 'Linux'
      }, 
      {
        theme_id: 1,
        question: 'Какая библиотека JavaScript предоставляет API для легкой работы с виртуальным DOM и компонентами, что делает её популярной для разработки интерфейсов?',
        answer: 'React'
      },
      {
        theme_id: 1,
        question: 'Что выведет следующая строка JavaScript-кода? "console.log(typeof null);"?',
        answer: 'object'
      },
      {
        theme_id: 1,
        question: 'Что означает "CSS" в веб-разработке?',
        answer: 'Cascading Style Sheets'
      },
      {
        theme_id: 1,
        question: 'Как изначально назывался JavaScript?',
        answer: 'Mocha'
      },
      {
        theme_id: 2,
        question: 'Из какого растения делают текилу?',
        answer: 'Агава'
      }, 
      {
        theme_id: 2,
        question: 'Какой алкогольный напиток, кроме пива, часто готовят путем брожения фруктов?',
        answer: 'Вино'
      },
      {
        theme_id: 2,
        question: 'Какой газированный напиток традиционно смешивают с виски для приготовления коктейля?',
        answer: 'Кола'
      },
      {
        theme_id: 2,
        question: 'Как называется традиционный мексиканский коктейль, состоящий из текилы, лаймового сока и апельсинового ликёра?',
        answer: 'Маргарита'
      },
      {
        theme_id: 2,
        question: 'Какая крепость обычно считается средней для водки?',
        answer: '40%'
      },
      {
        theme_id: 3,
        question: 'В Аризоне, США, запрещено держать более одного ... в доме.',
        answer: 'Осёл'
      },
      {
        theme_id: 3,
        question: 'В Индии, запрещено ли использовать телефон в присутствии коровы?',
        answer: 'Нет'
      },
      {
        theme_id: 3,
        question: 'В какой стране вам выпишут штраф если вы забирётесь на дерево?',
        answer: 'Канада'
      },
      {
        theme_id: 3,
        question: 'В Австралии, законно ли появляться в костюме супергероя, если ты не работаешь в кино?',
        answer: 'Нет'
      },
      {
        theme_id: 3,
        question: 'В Италии запрещено есть пиццу без томатного соуса?',
        answer: 'Нет'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('QuestionsAnswers', null, {});
  }
};
