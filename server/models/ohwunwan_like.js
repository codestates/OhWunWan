'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ohwunwan_like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ohwunwan_like.init({
    user_id: DataTypes.INTEGER,
    ohwunwan_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ohwunwan_like',
  });
  return Ohwunwan_like;
};