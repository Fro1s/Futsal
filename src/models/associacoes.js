const Jogadores = require('./jogadores');
const Classificacao = require('./classificacao');
const Partidas = require('./partidas');
const Times = require('./times');

Times.hasMany(Jogadores);
Jogadores.belongsTo(Times);

Times.belongsToMany(Partidas, { through: 'TimesPartidas' });
Partidas.belongsToMany(Times, { through: 'TimesPartidas' });

Classificacao.belongsTo(Times);
Times.hasOne(Classificacao);

module.exports = {
    Jogadores,
    Times,
    Partidas,
    Classificacao,
};