'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback_like extends Model {
    
    static associate(models) {
        //M:1 Feedback_like:User
        this.belongsTo(models.User, {
          foreignKey: "user_id",
          onDelete: "cascade",
        });
        //M:1 Feedback_like:Feedback
        this.belongsTo(models.Feedback, {
          foreignKey: "feedback_id",
          onDelete: "cascade",
        });
    }
  }
  Feedback_like.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    feedback_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Feedback_like',
  });
  return Feedback_like;
};