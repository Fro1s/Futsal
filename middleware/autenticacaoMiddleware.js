const autenticarLogin = (req, res, next) => {
    const token = req.headers.authorization;
  
    if(!token){
      return res.status(401).json({ error: 'Acesso não autorizado. Token não fornecido.' });
    }
  
    next();
};

module.exports = autenticarLogin;