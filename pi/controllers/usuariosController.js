const data= require("../database/models");
let usuarios= data.Usuario;
let posteos= data.Posteo;

const usuariosController = {
    miPerfil: function(req, res, next) {
        if (res.locals.user !=undefined) {
        let id= req.params.id;
        // return res.send(req.params.id)
        let criterio = {
            order: [['createdAt', 'DESC']], 
            where: [{ idUsuario: id }],
            include: {
              all: true,
              nested: true
            }
          }
        posteos.findAll(criterio)
        .then(function(result){
            // res.send(res.locals.user)
            // res.send(result)
            return res.render('miPerfil', { idUsuario: id, posteos: result});
        })
        .catch(function (error) {
            return res.send(error)
        })} else{
            res.redirect('/login');
        }
    },
    editarPerfil: function(req, res, next) {
        return res.render('editarPerfil');
    },
    detalleUsuario: function(req, res, next) {
        let id= req.params.id
        let relacion = {
            include: {
                all: true,
                nested: true
            }
        };
        usuarios.findByPk(id, relacion)
        .then(function(result){
            //res.send(result)
            return res.render('detalleUsuario', { idUsuario: id, usuario: result, posteos: result.usuarioPosteo });
        })
        .catch(function(error){
            return res.send(error)
        })
    }
};

module.exports = usuariosController;
