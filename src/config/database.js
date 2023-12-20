const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'campeonatofutsal',
    'root',
    '156327890',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = sequelize;