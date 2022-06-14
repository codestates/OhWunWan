'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dead_1rm extends Model {
    
    static associate(models) {
       //M:1 Dead_1rm:User
     this.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: "cascade",
    });

     //1:M(Dead_1rm:Dead_1rm_respect)
     this.hasMany(models.Dead_1rm_respect, {
      foreignKey: "dead_1rm_id",
      // onUpdate: defaults to CASCADE
      onDelete: "cascade",
    });
    
    //1:M(Dead_1rm:Dead_1rm_comment)
    this.hasMany(models.Dead_1rm_comment, {
      foreignKey: "dead_1rm_id",
      // onUpdate: defaults to CASCADE
      onDelete: "cascade",
    });
    }
  } 
  Dead_1rm.init({
    user_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    video: {
      type:DataTypes.STRING(1000),
      allowNull: false,
    },
    text_content: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    kg: {
      type:DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Dead_1rm',
  });
  return Dead_1rm;
};