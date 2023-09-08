const data= require("../db/data");

const postsController ={
    detalle: function(req, res, next) {
        res.render('detallePost', { title: 'Express' });
      },
    agregarPost: function(req, res, next) {
        res.render('agregarPost', { title: 'Express' });
      }
};
/* cambiar el dato title que le estamos mandando por los correspondientes datos */
module.exports= postsController;