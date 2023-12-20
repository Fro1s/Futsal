'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partidas extends Model {
  
    static associate(models) {
    }
  }
  Partidas.init({
    data: DataTypes.DATEONLY,
    horarioInicio: DataTypes.TIME,
    horarioTermino: DataTypes.TIME,
    placar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Partidas',
  });
  return Partidas;
};