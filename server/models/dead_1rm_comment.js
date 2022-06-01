'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dead_1rm_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dead_1rm_comment.init({
    user_id: DataTypes.INTEGER,
    dead_1rm_id: DataTypes.INTEGER,
    text_content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dead_1rm_comment',
  });
  return Dead_1rm_comment;
};