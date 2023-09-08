var express = require('express');
var router = express.Router();
const usuariosController= require("../controllers/usuariosController")


/* GET users listing. */
/* cambiar el dato title que le estamos mandando por los correspondientes datos */
router.get('/miPerfil/id/:id', usuariosController.miPerfil);

router.get('/editarMiPerfil/id/:id',usuariosController.editarPerfil);

router.get('/detalleUsuario/id/:id', usuariosController.detalleUsuario);

module.exports = router;

