const express = require('express');
const path = require('path');
const jogadoresRoutes = require('./routes/jogadoresRoutes');
const classificacaoRoutes = require('./routes/classifacacaoRoutes');
const partidasRoutes = require('./routes/partidasRoutes');
const timesRoutes = require('./routes/timesRoutes');
const autenticacaoRoutes = require('./routes/autenticacaoRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));

app.get('/jogadores', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastroJogador.ejs'));
});
app.get('/times', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastroEquipes.ejs'));
});
app.get('/classificacao', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'classificacao.ejs'));
});
app.get('/partidas', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastroPartidas.ejs'));
});


app.use(autenticacaoRoutes);
app.use('/autenticacao', autenticacaoRoutes);
app.use('/jogadores', jogadoresRoutes);
app.use('/classificacao', classificacaoRoutes);
app.use('/partidas', partidasRoutes);
app.use('/times', timesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
