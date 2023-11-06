var express = require('express');
var router = express.Router();
const postsController= require("../controllers/postsController")

/* GET home page. */

router.get('/detalle/id/:id', postsController.detalle);

router.get('/agregar', postsController.showAgregarPost);

router.post('/agregar', postsController.storeAgregarPost);

module.exports = router;
