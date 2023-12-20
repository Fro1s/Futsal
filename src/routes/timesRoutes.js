const express = require('express');
const router = express.Router();
const timesController = require('../controllers/timesController');

router.get('/', timesController.listarTimes);
router.post('/', timesController.cadastrarTime);
router.put('/adicionar-jogador', timesController.adicionarJogador);
router.put('/excluir-jogador', timesController.excluirJogador);

module.exports = router;