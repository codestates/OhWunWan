'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dead_1rm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dead_1rm.init({
    user_id: DataTypes.INTEGER,
    video: DataTypes.BLOB,
    text_content: DataTypes.STRING,
    kg: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dead_1rm',
  });
  return Dead_1rm;
};