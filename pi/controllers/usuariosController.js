const data= require("../database/models");
let usuarios= data.Usuario;
let posteos= data.Posteos;


const usuariosController = {
    miPerfil: function(req, res, next) {
        let criterio = {where: [{
            id: req.session.user.id
        }]};
        res.send(req.session.user.id)

        posteos.findAll(criterio)
        .then(function (result) {
            return res.render ('miPerfil',{posteos:result})
        })
        .catch(function (error) {
            return res.send(error)
        })
        // res.send({data:res.session.user})
    },
    editarPerfil: function(req, res, next) {
        return res.render('editarPerfil', { title: 'Express' });
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
            // res.send(result)
            return res.render('detalleUsuario', { idUsuario: id, usuario: result, posteos: result.usuarioPosteo });
        })
        .catch(function(error){
            return res.send(error)
        })
    }
};

module.exports = usuariosController;
