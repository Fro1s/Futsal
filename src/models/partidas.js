const { DataTypes } = require('sequelize');
const seq = require('../config/database');

const Partidas = seq.define('Partidas', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    horarioInicio: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    horarioTermino: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    placar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Partidas;