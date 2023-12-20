'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogadores extends Model {
    
    static associate(models) {

    }
  }
  Jogadores.init({
    nome: DataTypes.STRING,
    numeroCamiseta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jogadores',
  });
  return Jogadores;
};