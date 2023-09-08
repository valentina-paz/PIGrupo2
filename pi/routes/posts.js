var express = require('express');
var router = express.Router();
const postsController= require("../controllers/postsController")

/* GET home page. */
/* cambiar el dato title que le estamos mandando por los correspondientes datos */
router.get('/detalle/id/:id', postsController.detalle);

router.get('/agregar', postsController.agregarPost);

/* 1) esta bien que detalle tenga id?
   2) agregar tambien tiene que tener id?
   3) esta bien que no haya un posts/? (escribir posts/ sin nada despues --> los que hicimos son posts/detalle y posts/agregar)  */

module.exports = router;
