var express = require('express');
var router = express.Router();
const mainController= require("../controllers/mainController")

/* GET home page. */
router.get('/', mainController.index);

router.get('/login', mainController.login);

router.post('/login', mainController.loginPost);

router.get('/logout', mainController.logout);

router.get('/registracion', mainController.register);

router.post('/registracion', mainController.registerPost);

router.get('/busqueda', mainController.busqueda);

module.exports = router;

