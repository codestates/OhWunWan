'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dead_1rm_respect extends Model {
    
    static associate(models) {
       //M:1 Dead_1rm_like:User
       this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      //M:1 Dead_1rm_like:Dead_1rm
      this.belongsTo(models.Dead_1rm, {
        foreignKey: "dead_1rm_id",
        onDelete: "cascade",
      });
    }
  }
  Dead_1rm_respect.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dead_1rm_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Dead_1rm_respect',
  });
  return Dead_1rm_respect; 
};