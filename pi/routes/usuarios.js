var express = require('express');
var router = express.Router();

/* GET users listing. */
/* cambiar el dato title que le estamos mandando por los correspondientes datos */
router.get('/miPerfil/id/:id', function(req, res, next) {
  res.render('miPerfil', { title: 'Express' });
});

router.get('/editarMiPerfil/id/:id', function(req, res, next) {
  res.render('editarPerfil', { title: 'Express' });
});

router.get('/detalleUsuario/id/:id', function(req, res, next) {
  res.render('detalleUsuario', { title: 'Express' });
});

module.exports = router;

