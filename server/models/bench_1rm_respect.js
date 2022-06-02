'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bench_1rm_respect extends Model {
   
    static associate(models) {
       //M:1 Bench_1rm_like:User
       this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      //M:1 Bench_1rm_like:Bench_1rm
      this.belongsTo(models.Bench_1rm, {
        foreignKey: "bench_1rm_id",
        onDelete: "cascade",
      });
    }
  }
  Bench_1rm_respect.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bench_1rm_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Bench_1rm_respect',
  });
  return Bench_1rm_respect;
}; 