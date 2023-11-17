var express = require('express');
var router = express.Router();
const postsController= require("../controllers/postsController")

/* GET home page. */

router.get('/detalle/id/:id', postsController.detalle);

router.get('/agregar', postsController.showAgregarPost);

router.post('/agregar', postsController.storeAgregarPost);

router.get('/deletePost/id/:id', postsController.deletePost);

router.get('/editPost/id/:id', postsController.editPost);

router.post('/updatePost/id/:id', postsController.updatePost);

module.exports = router;
