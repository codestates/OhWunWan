'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ohwunwan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ohwunwan.init({
    user_id: DataTypes.INTEGER,
    picture: DataTypes.BLOB,
    text_content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ohwunwan',
  });
  return Ohwunwan;
};