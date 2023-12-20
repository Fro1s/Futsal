const express = require('express');
const router = express.Router();
const partidasController = require('../controllers/partidasController');

router.get('/', partidasController.listarPartidas);
router.post('/', partidasController.cadastrarPartida);

module.exports = router;
