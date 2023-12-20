'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classificacao extends Model {

    static associate(models) {

    }
  }
  Classificacao.init({
    pontos: DataTypes.INTEGER,
    quantidadeGols: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Classificacao',
  });
  return Classificacao;
};