var express = require('express');
var router = express.Router();
const mainController= require("../controllers/mainController")

/* GET home page. */
/* cambiar el dato title que le estamos mandando por los correspondientes datos */
router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/registracion', mainController.register);

router.get('/busqueda', mainController.busqueda);

module.exports = router;

