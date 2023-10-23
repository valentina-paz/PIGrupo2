const data = require("../database/models");
const posts= data.Posteo

const mainController = {
  index: function (req, res, next) {
    let id = req.params.id
    let relacion = {
      include: {
        all: true,
        nested: true
      }
    };
    posts.findAll(relacion)
    .then(function(result){
          // res.send(result)
      res.render('index', { data: result });
    })
    .catch(function(error){
      res.send(error)
    })

  },
  login: function (req, res, next) {
    res.render('login', { title: 'Express' });
  },
  register: function (req, res, next) {
    res.render('registracion', { title: 'Express' });
  },
  busqueda: function (req, res, next) {
    let id = req.params.id
    res.render('index', { usuario: data.usuarios, idUsuario: id, posteos: data.posteos });
  }
};

module.exports = mainController;