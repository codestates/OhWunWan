'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bench_1rm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bench_1rm.init({
    user_id: DataTypes.INTEGER,
    video: DataTypes.BLOB,
    text_content: DataTypes.STRING,
    kg: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bench_1rm',
  });
  return Bench_1rm;
};