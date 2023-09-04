var express = require('express');
var router = express.Router();

/* GET home page. */
/* cambiar el dato title que le estamos mandando por los correspondientes datos */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/registracion', function(req, res, next) {
  res.render('registracion', { title: 'Express' });
});

router.get('/busqueda', function(req, res, next) {
  res.render('resultadoBusqueda', { title: 'Express' });
});

module.exports = router;

