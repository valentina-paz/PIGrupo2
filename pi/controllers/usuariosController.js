const data= require("../database/models");
let usuarios= data.Usuario;
let posteos= data.Posteo;

const usuariosController = {
    miPerfil: function(req, res) {
        if (res.locals.user !=undefined) {
        let id= req.params.id;
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
            return res.render('miPerfil', { idUsuario: id, posteos: result});
        })
        .catch(function (error) {
            return res.send(error)
        })} else{
            res.redirect('/login');
        }
    },
    editarPerfil: function (req, res) {
        let id = Number(req.params.id);
        usuarios.findByPk(id)
          .then(function (result) {
            res.render("editarPerfil", { usuarios: result })
          })
          .catch(function (error) {
            res.send(error)
          })
      },
      updatePerfil: function (req, res) {
        let id = req.params.id;
        let info = req.body;
        if (info.nombre == "") {
          return res.redirect(`/usuarios/editarMiPerfil/id/${id}`)
        } else if (info.email == "") {
          return res.redirect(`/usuarios/editarMiPerfil/id/${id}`)
        } else if (info.pass == "") {
            return res.redirect(`/usuarios/editarMiPerfil/id/${id}`)
        } else if (info.fotoPerfil == "") {
            return res.redirect(`/usuarios/editarMiPerfil/id/${id}`)
        } else if (info.fecha == "") {
            return res.redirect(`/usuarios/editarMiPerfil/id/${id}`)
        } else if (info.dni == "") {
            return res.redirect(`/usuarios/editarMiPerfil/id/${id}`)
        }
        let criterio = {
          where: [{
            id: id
          }]
        }
        usuarios.update(info, criterio)
          .then(function (result) {
            return res.redirect("/usuarios/miPerfil/id/" + id)
          })
          .catch(function (error) {
            res.send(error)
          })
      },
    detalleUsuario: function(req, res) {
        let id= req.params.id
        let relacion = {
            include: {
                all: true,
                nested: true
            }
        };
        usuarios.findByPk(id, relacion)
        .then(function(result){
            return res.render('detalleUsuario', { idUsuario: id, usuario: result, posteos: result.usuarioPosteo });
        })
        .catch(function(error){
            return res.send(error)
        })
    }
};

module.exports = usuariosController;
