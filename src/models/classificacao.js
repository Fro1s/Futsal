const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Times = require('./times');

const Classificacao = sequelize.define('Classificacao', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    pontos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    quantidadeGols: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
});

Classificacao.belongsTo(Times);

module.exports = Classificacao;