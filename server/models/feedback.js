'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
   
    static associate(models) {
      //M:1 Feedback:User
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });

       //1:M(Feedback:Feedback_like)
       this.hasMany(models.Feedback_like, {
        foreignKey: "feedback_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });
      
      //1:M(Feedback:Feedback_comment)
      this.hasMany(models.Feedback_comment, {
        foreignKey: "feedback_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });
      
    }
  }
  Feedback.init({
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
    }
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};