const express = require('express');
const router = express.Router();
const jogadoresController = require('../controllers/jogadoresController');

router.get('/', jogadoresController.listarJogadores);
router.post('/cadastrar', jogadoresController.cadastrarJogador);
router.put('/:id', jogadoresController.editarJogador);

module.exports = router;
