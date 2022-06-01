'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bench_1rm_comment extends Model {
    
    static associate(models) {
      //M:1 Bench_1rm_comment:User
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      //M:1 Bench_1rm_comment:Bench_1rm
      this.belongsTo(models.Bench_1rm, {
        foreignKey: "bench_1rm_id",
        onDelete: "cascade",
      });
    }
  }
  Bench_1rm_comment.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bench_1rm_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text_content:{ 
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Bench_1rm_comment',
  });
  return Bench_1rm_comment;
};