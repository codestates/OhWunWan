'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dead_1rm_comment extends Model {
    
    static associate(models) {
      //M:1 Dead_1rm_comment:User
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      //M:1 Dead_1rm_comment:Dead_1rm
      this.belongsTo(models.Dead_1rm, {
        foreignKey: "dead_1rm_id",
        onDelete: "cascade",
      });
    } 
  }
  Dead_1rm_comment.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dead_1rm_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text_content:{ 
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Dead_1rm_comment',
  });
  return Dead_1rm_comment;
};