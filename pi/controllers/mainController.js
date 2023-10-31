const data = require("../database/models");
const posts= data.Posteo;
const usuarios= data.Usuario;
const bcrypt = require('bcryptjs');


const mainController = {
  index: function (req, res, next) {
    let id = req.params.id
    let relacion = {
      include: {
        all: true,
        nested: true
      }
    };
    posts.findAll(relacion)
    .then(function(result){
          // res.send(result)
      return res.render('index', { data: result });
    })
    .catch(function(error){
      return res.send(error)
    })

  },
  login: function (req, res, next) {
    return res.render('login');
  },

  loginPost: function (req,res,next) {
    let emailBuscado = req.body.email;
    let pass = req.body.password;
    let criterio = {
      where: [{email: emailBuscado}]
    };

    usuarios.findOne (criterio)
    .then(function (result) {
      if (result != null) {
        let check = bcrypt.compareSync(pass,result.password)

        if (check) {
          req.session.user = result.dataValues;
          if (rememberMe != undefined) {
            res.cookie('userId',result.id,{maxAge:1000 * 60 * 5})
          }
          return res.redirect('/')
        }
        else {
          return res.render ('/login')
        }

      } else {
        return res.send ('No existe el mail ' + emailBuscado)
      }
      
    }) . catch (function (error) {
        return res.send (error);
    });
  },

  register: function (req, res, next) {
    return res.render('registracion');
  },

  registerPost: function (req, res, next) {
    let infoForm = req.body;
    let user = {
      //los nombres de las prop tienen q ser = a nombre de la columna
      nombre: infoForm.nombre,
      email: infoForm.email,
      pass: bcrypt.hashSync(infoForm.pass,10),
      fotoPerfil: infoForm.fotoPerfil,
      fechaNacimiento: infoForm.fecha,
      dni: infoForm.dni,
      rembember_token: 'false'
    }
    usuarios.create(user)
    .then(function (result) {
      return res.redirect('/login');
    })
    .catch(function(error) {
      return res.send(error)
    });
  }, 

  busqueda: function (req, res, next) {
    let id = req.params.id
    return res.render('index', { usuario: data.usuarios, idUsuario: id, posteos: data.posteos });
  }
};

module.exports = mainController;