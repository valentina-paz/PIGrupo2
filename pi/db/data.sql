CREATE DATABASE IF NOT EXISTS dbPI;

USE dbPI;

CREATE TABLE usuarios (
/*  nombreColumna    tipoDeDatos    restricciones  */
    id  INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (60) NOT NULL,
    email  VARCHAR(60) NOT NULL UNIQUE,
    pass   VARCHAR(200) NOT NULL,
    fotoPerfil  VARCHAR(400) NULL,
    fecha  DATE NULL,
    dni    INT UNIQUE NOT NULL,
    createdAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt  TIMESTAMP NULL
);
USE dbPI;

INSERT INTO usuarios (id,nombre,email,pass,fotoPerfil,fecha,dni)
VALUES (DEFAULT,'Juan Holder','juan.holder@gmail.com','Password123','/img/juan.png','1987-05-15',32123456);

CREATE TABLE posteos(
	 id  INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
     idUsuario INT UNSIGNED,
     nombreImg VARCHAR(100) NOT NULL,
     textoPost VARCHAR(200) NOT NULL,
     createdAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     deletedAt  TIMESTAMP NULL,
     
     FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
	 id  INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
     idPost INT UNSIGNED,
     idUsuario INT UNSIGNED,
     textoComment VARCHAR(200) NOT NULL,
     createdAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     deletedAt  TIMESTAMP NULL,
     
     FOREIGN KEY (idPost) REFERENCES posteos(id),
     FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);