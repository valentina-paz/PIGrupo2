const data = require("../database/models");
const posts = data.Posteo;
const usuarios = data.Usuario;
const bcrypt = require('bcryptjs');
const op = data.Sequelize.Op;

const mainController = {
  index: function (req, res, next) {
    let id = req.params.id;
    let criterio = {
      order: [['createdAt', 'DESC']], 
      include: {
        all: true,
        nested: true
      }
    }
    posts.findAll(criterio)
      .then(function (result) {
         //res.send(result)
        return res.render('index', { data: result });
      })
      .catch(function (error) {
        return res.send(error)
      })

  },
  login: function (req, res, next) {
    return res.render('login');
  },

  loginPost: function (req, res, next) {
    let emailBuscado = req.body.email;
    let pass = req.body.pass;
    let rememberMe = req.body.rememberMe;

    let errors = {};
    if (emailBuscado == "") {
      errors.message = "El campo email esta vacio";
      res.locals.errors = errors;
      return res.render("login");
    } else if (req.body.pass == "") {
      errors.message = "El campo de contraseña esta vacio";
      res.locals.errors = errors;
      return res.render("login");
    } else {

      let criterio = {
        where: [{ email: emailBuscado }]
      };

      usuarios.findOne(criterio)
        .then(function (result) {
          if (result != null) {
            let check = bcrypt.compareSync(pass, result.pass)
            if (check) {
              req.session.user = result.dataValues;

              if (rememberMe) {
                res.cookie('userId', result.id, { maxAge: 1000 * 60 * 5 })
              }
              return res.redirect('/posts/agregar')
              //res.send({data:req.session.user })
            }
            else {
              errors.message = "La contraseña es incorrecta";
              res.locals.errors = errors;
              return res.render('login');
            }
          } else {
            errors.message = 'No existe el mail ' + emailBuscado;
            res.locals.errors = errors;
            res.render ('login')
            console.log(errors);
            // return res.send('No existe el mail ' + emailBuscado)
          }
        }).catch(function (error) {
          return res.send(error);
        });
    }
  },

  logout: function (req, res) {
    req.session.user = undefined;
    res.locals.user = undefined;
    res.clearCookie('userId');
    return res.render('login')
  },

  register: function (req, res, next) {
    return res.render('registracion');
  },

  //faltan los controles de acceso
  registerPost: function (req, res) {
    let infoForm = req.body;
    let errors = {};
    if (infoForm.email == "") {
      errors.message = "El campo email esta vacio";
      res.locals.errors = errors;
      return res.render("registracion");
    } else if (infoForm.pass == "") {
      errors.message = "El campo contraseña esta vacio";
      res.locals.errors = errors;
      return res.render("registracion");
    } else if (infoForm.pass.length < 3) {
      errors.message = "El campo contraseña debe tener más de tres caracteres";
      res.locals.errors = errors;
      return res.render("registracion");
    } else if (infoForm.nombre == "") {
      errors.message = "El campo nombre esta vacio";
      res.locals.errors = errors;
      return res.render("registracion");
    } else if (infoForm.fotoPerfil == "") {
      errors.message = "El campo foto de perfil esta vacio";
      res.locals.errors = errors;
      return res.render("registracion");
    } else if (infoForm.fecha == "") {
      errors.message = "El campo fecha de nacimiento esta vacio";
      res.locals.errors = errors;
      return res.render("registracion");
    } else if (infoForm.dni == "") {
      errors.message = "El campo DNI esta vacio";
      res.locals.errors = errors;
      return res.render("registracion");
    } else {
      usuarios.findOne({where:[{email: infoForm.email}]})
      .then(function (result) {
        console.log(result);
        if (result != undefined) {
          errors.message = "Este mail ya esta registrado";
          res.locals.errors = errors;
          return res.render("registracion");
        } else {
          let user = {
        //los nombres de las prop tienen q ser = a nombre de la columna.
        nombre: infoForm.nombre,
        email: infoForm.email,
        pass: bcrypt.hashSync(infoForm.pass, 10),
        fotoPerfil: infoForm.fotoPerfil,
        fechaNacimiento: infoForm.fecha,
        dni: infoForm.dni,
        rembember_token: 'false'
      }
      usuarios.create(user)
        .then(function (result) {
          return res.redirect('/login');
        })
        .catch(function (error) {
          let errors = {};
          console.log(error);
          errors.message = "El campo email esta repetido";
          res.locals.errors = errors;
          return res.redirect("registracion")
        });
        }
      })
    }
  },
  busqueda: function (req, res) {
    let busqueda = req.query.busqueda;
    let filtro = {
      limit: 10,
      order: [['createdAt', 'DESC']],
      where: [
        { textoPost: { [op.like]: `%${busqueda}%` } }
      ],
      include: {
        all: true,
        nested: true
      }
    }
    posts.findAll(filtro)
      .then(function (results) {
        //res.send(results)
        return res.render("resultadoBusqueda", { posts: results, criterio: busqueda })
      })
      .catch(function (error) {
        res.send(error)
      })
  },
};

module.exports = mainController;