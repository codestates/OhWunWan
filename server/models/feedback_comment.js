'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feedback_comment.init({
    user_id: DataTypes.INTEGER,
    feedback_id: DataTypes.INTEGER,
    text_content: DataTypes.STRING,
    selection: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Feedback_comment',
  });
  return Feedback_comment;
};