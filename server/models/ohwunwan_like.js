'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ohwunwan_like extends Model {

    static associate(models) {
      //M:1 Ohwunwan_like:User
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      //M:1 Ohwunwan_like:Ohwunwan
      this.belongsTo(models.Ohwunwan, {
        foreignKey: "ohwunwan_id",
        onDelete: "cascade",
      });
    }
  }
  Ohwunwan_like.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ohwunwan_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Ohwunwan_like',
  });
  return Ohwunwan_like;
};