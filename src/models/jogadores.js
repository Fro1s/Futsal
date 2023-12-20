const { DataTypes } = require('sequelize');
const seq = require('../config/database');

const Jogadores = seq.define('Jogadores', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroCamiseta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Jogadores;