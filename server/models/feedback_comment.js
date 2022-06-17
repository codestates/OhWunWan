'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback_comment extends Model {
    
    static associate(models) {
      //M:1 Feedback_comment:User
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      //M:1 Feedback_comment:Feedback
      this.belongsTo(models.Feedback, {
        foreignKey: "feedback_id",
        onDelete: "cascade",
      });
    }
  }
  Feedback_comment.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    feedback_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text_content:{ 
      type:DataTypes.STRING,
      allowNull: false
    },
    selection: {
      type:DataTypes.BOOLEAN,
      // allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Feedback_comment',
  });
  return Feedback_comment;
};