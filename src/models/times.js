const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Times = sequelize.define('Times', {
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
});

module.exports = Times;
