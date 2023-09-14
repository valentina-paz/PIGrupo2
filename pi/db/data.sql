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


INSERT INTO usuarios (id,nombre,email,pass,fotoPerfil,fecha,dni)
VALUES (DEFAULT,'Juan Holder','juan.holder@gmail.com','Password123','/img/juan.png','1987-05-15',32123456);
INSERT INTO usuarios (id,nombre,email,pass,fotoPerfil,fecha,dni)
VALUES (DEFAULT,'Maria Rodriguez','maria.rodriguez@gmail.com','SecurePass!23','/img/maria.png','1999-09-20',28987654);
INSERT INTO usuarios (id,nombre,email,pass,fotoPerfil,fecha,dni)
VALUES (DEFAULT,'Carlos Gonzalez','carlos.gonzalez@gmail.com','Password456','/img/carlos.png','1985-12-03',35789123);
INSERT INTO usuarios (id,nombre,email,pass,fotoPerfil,fecha,dni)
VALUES (DEFAULT,'Paula Fernandez','paula.fernandez@gmail.com','SecurePass123','/img/paula.png','1992-11-10',29876543);
INSERT INTO usuarios (id,nombre,email,pass,fotoPerfil,fecha,dni)
VALUES (DEFAULT,'Gonzalo Perez','gonzalo.perez@gmail.com','Pass123word','/img/gonzalo.png','1989-06-27',26345678);

INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'1','https://i.pinimg.com/564x/37/9a/b5/379ab510798c0e6928fbce586e3d90f4.jpg','La vida es corta, los viajes son largos.');
INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'1','https://i.pinimg.com/564x/4d/22/34/4d22349d367c30f7eafbe3bd11cebfe4.jpg','Los viajes te enseñan a apreciar la belleza de la simplicidad.');
INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'2','https://i.pinimg.com/564x/15/4c/9d/154c9d1148d37405652effe485d4faed.jpg','La mejor inversión es en experiencias, no en cosas materiales.');
INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'2','https://i.pinimg.com/564x/b3/de/5d/b3de5d44c827243aaeb04d147befcdfa.jpg','No hay mapa para los tesoros que encuentras mientras viajas.');
INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'3','hhttps://viajes.nationalgeographic.com.es/medio/2019/03/27/bagan_5e8e026d_500x782.jpg','El mundo es un libro y aquellos que no viajan leen solo una página.');
INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'3','https://i.pinimg.com/564x/4f/af/59/4faf599573517421e927355090f317c5.jpg','Cada lugar tiene una historia, estoy aquí para escucharlas');
INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'4','https://i.pinimg.com/564x/23/fb/aa/23fbaa667b4e6b09321a6b968b128198.jpg','Las mejores historias se escriben en la carretera.');
INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'4','https://i.pinimg.com/564x/e7/71/e8/e771e8b1994a91441f73216af860671f.jpg','Viajar es la mejor forma de reinventarse.');
INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'5','https://i.pinimg.com/564x/e0/d3/49/e0d3495dcfb4af549c8b15b11931c3c5.jpg','Descubriendo nuevos horizontes y creando recuerdos inolvidables.');
INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'5','hhttps://i.pinimg.com/564x/e3/89/cf/e389cfca3618ef65ef2e207a6712ef8f.jpg','Viajar es la única cosa que compras y que te hace más rico.');











