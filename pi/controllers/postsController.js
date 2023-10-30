const data= require("../database/models");
let posts= data.Posteo;

const postsController ={
    detalle: function(req, res, next) {
      let id= req.params.id;
      let relacion = {
        include: {
          all: true,
          nested: true
        }
      };
      posts.findByPk(id, relacion)
      .then(function(result){
        // res.send(result)
        return res.render('detallePost', { idPost: id, usuario: result.posteoUsuario, posteo: result});
      })
      .catch(function(error){
        return res.send(error)
      })
      },

    agregarPost: function(req, res, next) {
      return res.render('agregarPost', { title: 'Express' });
      }
};
/* cambiar el dato title que le estamos mandando por los correspondientes datos */
module.exports= postsController;