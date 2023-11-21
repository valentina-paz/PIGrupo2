const data = require("../database/models");
let posts = data.Posteo;
let usuarios = data.Usuario;
const op = data.Sequelize.Op;
let comentarios = data.Comentario;

const postsController = {
  detalle: function (req, res, next) {
    let id = req.params.id;
    let relacion = {
      include: {
        all: true,
        nested: true
      }
    };
    posts.findByPk(id, relacion)
      .then(function (result) {
        // res.send(result)
        return res.render('detallePost', { idPost: id, usuario: result.posteoUsuario, posteo: result });
      })
      .catch(function (error) {
        return res.send(error)
      })
  },

  showAgregarPost: function (req, res, next) {
    if (res.locals.user != undefined) {
      return res.render('agregarPost');
    } else {
      return res.redirect('/login');
    }
  },

  storeAgregarPost: function (req, res) {
    let info = req.body;
    //return res.send(info);
    info.idUsuario = req.session.user.id
    posts.create(info)
      .then(function (result) {
        // res.send(result)
        return res.redirect('/')
      })
      .catch(function (error) {
        res.send(error)
      })
  },
  deletePost: function (req, res) {
    let id = Number(req.params.id);
    let criterio = {
      where: [{ id: id }]
    }
    posts.destroy(criterio)
      .then(function (result) {
        return res.redirect('/')
      })
      .catch(function (error) {
        res.send(error)
        res.redirect('/posts/detalle/id/'+ id)
      })
  },
  editPost: function (req, res) {
    let id = Number(req.params.id);
    posts.findByPk(id)
      .then(function (result) {
        res.render("editarPost", { post: result })
      })
      .catch(function (error) {
        res.send(error)
      })
  },
  updatePost: function (req, res) {
    let id = req.params.id;
    let info = req.body;
    let errors = {};
    if (info.nombreImg == "") {
      return res.redirect(`/posts/editPost/id/${id}`)
    } else if (info.textoPost == "") {
      return res.redirect(`/posts/editPost/id/${id}`)
    }
    let criterio = {
      where: [{
        id: id
      }]
    }
    posts.update(info, criterio)
      .then(function (result) {
        return res.redirect("/posts/detalle/id/" + id)
      })
      .catch(function (error) {
        res.send(error)
      })
  },
  addComment: function (req, res) {
    if (req.session.user == undefined) {
      return res.redirect('/login')
    } else {
      let comentario = req.body.comentario;
    //res.send(info)
    comentarios.create({
      idPost: req.params.id,
      idUsuario: req.session.user.id,
      textoComment: comentario
    })
      .then(function (result) {
        let idPost = req.params.id;
        return res.redirect('/posts/detalle/id/'+ idPost);
      })
      .catch(function (error) {
        res.send(error)
      })
    }
  }
};
module.exports = postsController;