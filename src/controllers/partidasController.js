const { Partidas } = require('../models/partidas');
const { Times } = require('../models/times')

const PartidasController = {
  async listarPartidas(req, res) {
    try{
      const partidas = await Partidas.findAll({
        include: [{ model: Times }],
      });
      res.json(partidas);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  },

  async cadastrarPartida(req, res) {
    const { data, horarioInicio, horarioTermino, idTime1, idTime2, placar } = req.body;

    try{
      const time1 = await Times.findByPk(idTime1);
      const time2 = await Times.findByPk(idTime2);
      if(!time1 || !time2){
        return res.status(404).json({ error: 'Times não encontrados.' });
      }

      const novaPartida = await Partidas.create({
        data,
        horarioInicio,
        horarioTermino,
        placar,
      });

      await novaPartida.setTimes([time1, time2]);
      res.status(201).json(novaPartida);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = PartidasController;