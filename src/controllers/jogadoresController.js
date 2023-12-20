const { Op } = require('sequelize');

const Jogadores = require('../models/jogadores');

const JogadoresController = {
    async listarJogadores(req, res){
        try{
            const jogadores = await Jogadores.findAll();
            res.json(jogadores);
        }catch(error){
            res.status(500).json({ error: error.message });
        }
    },

    async cadastrarJogador(req, res) {
        const { nome, numeroCamiseta } = req.body;
    
        const jogadorExistente = await Jogadores.findOne({ where: { nome } });
        if(jogadorExistente){
          return res.status(400).json({ error: 'Nome de jogador já existe.' });
        }
    
        if(nome.length < 3){
          return res.status(400).json({ error: 'O nome do jogador deve ter pelo menos 3 caracteres.' });
        }
    
        if(numeroCamiseta > 14){
          return res.status(400).json({ error: 'Número de camiseta inválido.' });
        }
    
        try{
          const camisetaExistente = await Jogadores.findOne({ where: { numeroCamiseta } });
          if(camisetaExistente){
            return res.status(400).json({ error: 'Número de camiseta já está em uso.' });
          }

          const novoJogador = await Jogadores.create({ nome, numeroCamiseta });
          res.status(201).json(novoJogador);
        }catch(error){
          console.error('Erro ao cadastrar jogador:', error);
          res.status(500).json({ error: error.message });
        }
      },

      async editarJogador(req, res) {
        const { id } = req.params;
        const { nome, numeroCamiseta } = req.body;
    
        try{
          const jogador = await Jogadores.findByPk(id);
          if(!jogador){
            return res.status(404).json({ error: 'Jogador não encontrado.' });
          }
    
          const nomeExistente = await Jogadores.findOne({ where: { nome, id: { [Op.ne]: id } } });
          if(nomeExistente){
            return res.status(400).json({ error: 'Nome de jogador já existe para outro jogador.' });
          }
    
          const camisetaExistente = await Jogadores.findOne({ where: { numeroCamiseta, id: { [Op.ne]: id } } });
          if(camisetaExistente){
            return res.status(400).json({ error: 'Número de camiseta já está em uso por outro jogador.' });
          }
    
          await jogador.update({ nome, numeroCamiseta });
          res.json(jogador);
        }catch(error){
          res.status(500).json({ error: error.message });
        }
      }
};

module.exports = JogadoresController;