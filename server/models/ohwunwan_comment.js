'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ohwunwan_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ohwunwan_comment.init({
    user_id: DataTypes.INTEGER,
    ohwunwan_id: DataTypes.INTEGER,
    text_content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ohwunwan_comment',
  });
  return Ohwunwan_comment;
};