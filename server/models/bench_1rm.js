'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bench_1rm extends Model {
    
    static associate(models) {
     //M:1 Bench_1rm:User
     this.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: "cascade",
    });

     //1:M(Bench_1rm:Bench_1rm_respect)
     this.hasMany(models.Bench_1rm_respect, {
      foreignKey: "bench_1rm_id",
      // onUpdate: defaults to CASCADE
      onDelete: "cascade",
    });
    
    //1:M(Bench_1rm:Bench_1rm_comment)
    this.hasMany(models.Bench_1rm_comment, {
      foreignKey: "bench_1rm_id",
      // onUpdate: defaults to CASCADE
      onDelete: "cascade",
    });
    }
  }
  Bench_1rm.init({
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
    modelName: 'Bench_1rm',
  });
  return Bench_1rm;
};