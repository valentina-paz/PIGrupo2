var express = require('express');
var router = express.Router();
const usuariosController= require("../controllers/usuariosController")


/* GET users listing. */
router.get('/miPerfil/id/:id?', usuariosController.miPerfil);

router.get('/editarMiPerfil/id/:id',usuariosController.editarPerfil);

router.post('/editarMiPerfil/id/:id',usuariosController.updatePerfil);

router.get('/detalleUsuario/id/:id', usuariosController.detalleUsuario);

module.exports = router;

