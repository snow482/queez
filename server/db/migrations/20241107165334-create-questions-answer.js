'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuestionsAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      theme_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Themes'
          },
          key: 'id'
        }
      },
      question: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      answer: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.fn('NOW')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('QuestionsAnswers');
  }
};