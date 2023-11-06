const data= require("../database/models");
let posts= data.Posteo;
let usuarios= data.Usuario;
const op= data.Sequelize.Op;

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

    showAgregarPost: function(req, res, next) {
      return res.render('agregarPost');
      },

    storeAgregarPost: function (req, res) {
      let info= req.body;
      //return res.send(info);
      info.idUsuario= req.session.user.id
      posts.create(info)
      .then(function (result) {
        // res.send(result)
        return res.redirect('/')
      })
      .catch(function (error) {
        res.send(error)
      })
    }
};
/* cambiar el dato title que le estamos mandando por los correspondientes datos */
module.exports= postsController;