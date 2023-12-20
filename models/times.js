'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Times extends Model {
 
    static associate(models) {
    }
  }
  Times.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Times',
  });
  return Times;
};