const { Times } = require('../models/times');
const { Jogadores } = require('../models/jogadores')

const TimesController = {
  async listarTimes(req, res) {
    try{
      const times = await Times.findAll({
        include: [{ model: Jogadores }],
      });
      res.json(times);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  },

  async cadastrarTime(req, res) {
    const { nome } = req.body;

    const timeExistente = await Times.findOne({ where: { nome } });
    if(timeExistente){
      return res.status(400).json({ error: 'Nome do time já existe.' });
    }
    try{
      const novoTime = await Times.create({ nome });
      res.status(201).json(novoTime);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  },

  async adicionarJogador(req, res) {
    const { idTime, idJogador } = req.body;

    try{
      const time = await Times.findByPk(idTime);
      if(!time){
        return res.status(404).json({ error: 'Time não encontrado.' });
      }

      const jogador = await Jogadores.findByPk(idJogador);
      if(!jogador){
        return res.status(404).json({ error: 'Jogador não encontrado.' });
      }

      await time.addJogador(jogador);
      res.json({ message: 'Jogador adicionado ao time com sucesso.' });
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  },

  async excluirJogador(req, res) {
    const { idTime, idJogador } = req.body;

    try{
      const time = await Times.findByPk(idTime);
      if(!time){
        return res.status(404).json({ error: 'Time não encontrado.' });
      }

      const jogador = await Jogadores.findByPk(idJogador);
      if(!jogador){
        return res.status(404).json({ error: 'Jogador não encontrado.' });
      }

      await time.removeJogador(jogador);
      res.json({ message: 'Jogador removido do time com sucesso.' });
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = TimesController;