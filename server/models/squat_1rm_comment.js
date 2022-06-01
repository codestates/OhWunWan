'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Squat_1rm_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Squat_1rm_comment.init({
    user_id: DataTypes.INTEGER,
    squat_1rm_id: DataTypes.INTEGER,
    text_content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Squat_1rm_comment',
  });
  return Squat_1rm_comment;
};