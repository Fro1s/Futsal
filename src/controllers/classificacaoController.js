const { Classificacao } = require('../models/classificacao');

const ClassificacaoController = {
  async listarClassificacao(req, res) {
    try{
      const classificacao = await Classificacao.findAll({
        include: [{ model: Times }],
        order: [['pontos', 'DESC']],
      });
      res.json(classificacao);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ClassificacaoController;