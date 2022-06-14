'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      //1:M(User:Ohwunwan)
      this.hasMany(models.Ohwunwan, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Ohwunwan_like)
      this.hasMany(models.Ohwunwan_like, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Ohwunwan_comment)
      this.hasMany(models.Ohwunwan_comment, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Feedback)
      this.hasMany(models.Feedback, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Feedback_like)
      this.hasMany(models.Feedback_like, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Feedback_comment)
      this.hasMany(models.Feedback_comment, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Bench_1rm)
      this.hasMany(models.Bench_1rm, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Bench_1rm_respect)
      this.hasMany(models.Bench_1rm_respect, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Bench_1rm_comment)
      this.hasMany(models.Bench_1rm_comment, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Dead_1rm)
      this.hasMany(models.Dead_1rm, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Dead_1rm_respect)
      this.hasMany(models.Dead_1rm_respect, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });  

      //1:M(User:Dead_1rm_comment)
      this.hasMany(models.Dead_1rm_comment, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });
      
      //1:M(User:Squat_1rm)
      this.hasMany(models.Squat_1rm, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });

      //1:M(User:Squat_1rm_respect)
      this.hasMany(models.Squat_1rm_respect, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });

      //1:M(User:Squat_1rm_comment)
      this.hasMany(models.Squat_1rm_comment, {
        foreignKey: "user_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });
    }
  }
  User.init({
    kakao_id:{
      type:DataTypes.BIGINT,
      unique: true,
      allowNull: false,
    },
    nickname:{
      type:DataTypes.STRING,
      unique: true,
      allowNull: false,
    } ,
    profile_picture:{
      type:DataTypes.STRING(1000),
    } 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};