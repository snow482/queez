'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.QuestionsAnswers, {
        foreignKey: "theme_id"
      })
    }
  }
  Theme.init({
    theme: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};