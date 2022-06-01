'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback_like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feedback_like.init({
    user_id: DataTypes.INTEGER,
    feedback_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Feedback_like',
  });
  return Feedback_like;
};