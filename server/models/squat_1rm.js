'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Squat_1rm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Squat_1rm.init({
    user_id: DataTypes.INTEGER,
    video: DataTypes.BLOB,
    text_content: DataTypes.STRING,
    kg: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Squat_1rm',
  });
  return Squat_1rm;
};