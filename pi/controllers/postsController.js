const data= require("../database/models");

const postsController ={
    detalle: function(req, res, next) {
      let id= req.params.id;
        res.render('detallePost', { idPost: id, usuario: data.usuarios, posteos: data.posteos});
      },
    agregarPost: function(req, res, next) {
        res.render('agregarPost', { title: 'Express' });
      }
};
/* cambiar el dato title que le estamos mandando por los correspondientes datos */
module.exports= postsController;