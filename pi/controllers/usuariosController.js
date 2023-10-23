const data= require("../database/models");

const usuariosController = {
    miPerfil: function(req, res, next) {
        res.render('miPerfil', { usuario: data.usuarios, posteos: data.posteos });
    },
    editarPerfil: function(req, res, next) {
        res.render('editarPerfil', { title: 'Express' });
    },
    detalleUsuario: function(req, res, next) {
        let id= req.params.id
        res.render('detalleUsuario', { idUsuario: id, usuario: data.usuarios, posteos: data.posteos });
    }
};

module.exports = usuariosController;
