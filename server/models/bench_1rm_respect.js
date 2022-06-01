'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bench_1rm_respect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bench_1rm_respect.init({
    user_id: DataTypes.INTEGER,
    bench_1rm_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bench_1rm_respect',
  });
  return Bench_1rm_respect;
};