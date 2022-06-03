'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Squat_1rm_respect extends Model {
    
    static associate(models) {
      //M:1 Squat_1rm_like:User
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      //M:1 Squat_1rm_like:Squat_1rm
      this.belongsTo(models.Squat_1rm, {
        foreignKey: "squat_1rm_id",
        onDelete: "cascade",
      });
    }
  }
  Squat_1rm_respect.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    squat_1rm_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Squat_1rm_respect',
  });
  return Squat_1rm_respect;
}; 