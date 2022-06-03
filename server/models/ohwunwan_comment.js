'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ohwunwan_comment extends Model {
   
    static associate(models) {
      //M:1 Ohwunwan_comment:User
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      //M:1 Ohwunwan_comment:Ohwunwan
      this.belongsTo(models.Ohwunwan, {
        foreignKey: "ohwunwan_id",
        onDelete: "cascade",
      });
    }
  }
  Ohwunwan_comment.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ohwunwan_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text_content:{ 
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Ohwunwan_comment',
  });
  return Ohwunwan_comment;
};