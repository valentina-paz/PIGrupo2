const data = require("../db/data");

const mainController = {
  index: function (req, res, next) {
    let id = req.params.id
    res.render('index', { usuario: data.usuarios, idUsuario: id, posteos: data.posteos });
  },
  login: function (req, res, next) {
    res.render('login', { title: 'Express' });
  },
  register: function (req, res, next) {
    res.render('registracion', { title: 'Express' });
  },
  busqueda: function (req, res, next) {
    res.render('resultadoBusqueda', { title: 'Express' });
  }
};

module.exports = mainController;