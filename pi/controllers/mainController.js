const data= require("../db/data");
const mainController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
      },
    login: function(req, res, next) {
        res.render('login', { title: 'Express' });
      },
    register: function(req, res, next) {
        res.render('registracion', { title: 'Express' });
      },
    busqueda: function(req, res, next) {
        res.render('resultadoBusqueda', { title: 'Express' });
      }
};

module.exports= mainController;