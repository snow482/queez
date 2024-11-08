'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionsAnswers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Theme, {
        foreignKey: "theme_id"
      })
    }
  }
  QuestionsAnswers.init({
    theme_id: DataTypes.INTEGER,
    questions: DataTypes.TEXT,
    answer: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'QuestionsAnswers',
  });
  return QuestionsAnswers;
};