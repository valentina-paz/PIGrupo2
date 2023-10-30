const data= require("../database/models");
let usuarios= data.Usuario;

const usuariosController = {
    miPerfil: function(req, res, next) {
        return res.render('miPerfil', { usuario: data.usuarios, posteos: data.posteos });
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
