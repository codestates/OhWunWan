'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ohwunwan extends Model {
    
    static associate(models) {
      //M:1(Ohwunwan:User)
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      
      //1:M(Ohwunwan:Ohwunwan_like)
      this.hasMany(models.Ohwunwan_like, {
        foreignKey: "ohwunwan_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });
      
      //1:M(Ohwunwan:Ohwunwan_comment)
      this.hasMany(models.Ohwunwan_comment, {
        foreignKey: "ohwunwan_id",
        // onUpdate: defaults to CASCADE
        onDelete: "cascade",
      });
    }
  }
  Ohwunwan.init({
    user_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    picture: {
      type:DataTypes.STRING(1000),
      allowNull:false,
    },
    text_content:{
      type: DataTypes.STRING,
      allowNull: false
    }
  
  }, {
    sequelize,
    modelName: 'Ohwunwan',
  });
  return Ohwunwan;
};