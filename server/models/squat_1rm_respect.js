'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Squat_1rm_respect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Squat_1rm_respect.init({
    user_id: DataTypes.INTEGER,
    squat_1rm_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Squat_1rm_respect',
  });
  return Squat_1rm_respect;
};