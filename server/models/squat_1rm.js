'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Squat_1rm extends Model {

    static associate(models) {
      //M:1 Squat_1rm:User
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });

      //1:M(Squat_1rm:Squat_1rm_respect)
      this.hasMany(models.Squat_1rm_respect, {
        foreignKey: "squat_1rm_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });

      //1:M(Squat_1rm:Squat_1rm_comment)
      this.hasMany(models.Squat_1rm_comment, {
        foreignKey: "squat_1rm_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });
    }
  }
  Squat_1rm.init({
    user_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    video: {
      type:DataTypes.STRING,
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
    modelName: 'Squat_1rm',
  });
  return Squat_1rm;
};