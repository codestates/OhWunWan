'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dead_1rm_respect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dead_1rm_respect.init({
    user_id: DataTypes.INTEGER,
    dead_1rm_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dead_1rm_respect',
  });
  return Dead_1rm_respect;
};