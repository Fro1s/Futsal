const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    const payload = {
      username: username,
      role: 'user' 
    };

    const segredo = 'segredo_jwt'; 
    const token = jwt.sign(payload, segredo, { expiresIn: '1h' });
    res.json({ token });
  }else{
    res.status(401).json({ error: 'Credenciais inválidas.' });
  }
});

module.exports = router;