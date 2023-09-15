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
VALUES (DEFAULT,'Juan Holder','juan.holder@gmail.com','Password123','/img/juan.png','1987-05-15',32123456), 
(DEFAULT,'Maria Rodriguez','maria.rodriguez@gmail.com','SecurePass!23','/img/maria.png','1999-09-20',28987654), 
(DEFAULT,'Carlos Gonzalez','carlos.gonzalez@gmail.com','Password456','/img/carlos.png','1985-12-03',35789123), 
(DEFAULT,'Paula Fernandez','paula.fernandez@gmail.com','SecurePass123','/img/paula.png','1992-11-10',29876543), 
(DEFAULT,'Gonzalo Perez','gonzalo.perez@gmail.com','Pass123word','/img/gonzalo.png','1989-06-27',26345678);

INSERT INTO posteos (id,idUsuario,nombreImg,textoPost)
VALUES (DEFAULT,'1','https://i.pinimg.com/564x/37/9a/b5/379ab510798c0e6928fbce586e3d90f4.jpg','La vida es corta, los viajes son largos.'),
(DEFAULT,'1','https://i.pinimg.com/564x/4d/22/34/4d22349d367c30f7eafbe3bd11cebfe4.jpg','Los viajes te enseñan a apreciar la belleza de la simplicidad.'),
(DEFAULT,'2','https://i.pinimg.com/564x/15/4c/9d/154c9d1148d37405652effe485d4faed.jpg','La mejor inversión es en experiencias, no en cosas materiales.'),
(DEFAULT,'2','https://i.pinimg.com/564x/b3/de/5d/b3de5d44c827243aaeb04d147befcdfa.jpg','No hay mapa para los tesoros que encuentras mientras viajas.'),
(DEFAULT,'3','hhttps://viajes.nationalgeographic.com.es/medio/2019/03/27/bagan_5e8e026d_500x782.jpg','El mundo es un libro y aquellos que no viajan leen solo una página.'),
(DEFAULT,'3','https://i.pinimg.com/564x/4f/af/59/4faf599573517421e927355090f317c5.jpg','Cada lugar tiene una historia, estoy aquí para escucharlas'),
(DEFAULT,'4','https://i.pinimg.com/564x/23/fb/aa/23fbaa667b4e6b09321a6b968b128198.jpg','Las mejores historias se escriben en la carretera.'),
(DEFAULT,'4','https://i.pinimg.com/564x/e7/71/e8/e771e8b1994a91441f73216af860671f.jpg','Viajar es la mejor forma de reinventarse.'),
(DEFAULT,'5','https://i.pinimg.com/564x/e0/d3/49/e0d3495dcfb4af549c8b15b11931c3c5.jpg','Descubriendo nuevos horizontes y creando recuerdos inolvidables.'),
(DEFAULT,'5','hhttps://i.pinimg.com/564x/e3/89/cf/e389cfca3618ef65ef2e207a6712ef8f.jpg','Viajar es la única cosa que compras y que te hace más rico.');

INSERT INTO comentarios (id, idPost, idUsuario, textoComment)
VALUES (DEFAULT, 1, 5, "Qué lugar tan hermoso, dónde estás??"),
(DEFAULT, 1, 2, "Quiero ir ahí! Podés recomendarme algún lugar para visitar?"),
(DEFAULT, 1, 3, "Definitivamente, tenés el don de capturar momentos especiales."),
(DEFAULT, 1, 4, "Gracias por llevarnos virtualmente con vos en tus viajes. Es un placer seguirte!!"),
(DEFAULT, 2, 5, "Tenés algún consejo para planificar un viaje como este?"),
(DEFAULT, 2, 4, "¡Qué suerte tenés de haber estado ahí! Debe haber sido una experiencia única."),
(DEFAULT, 2, 2, "Estoy enamorada de este lugar gracias a tus fotos. Es así de lindo en persona?"),
(DEFAULT, 2, 3, "Tus viajes son una verdadera obra de arte. Seguí viviendo la vida al máximo!"),
(DEFAULT, 3, 4, "Tu amor por los viajes realmente brilla en cada foto."),
(DEFAULT, 3, 5, "Me encantaría escuchar la historia detrás de esta foto."),
(DEFAULT, 3, 1, "Me encanta tu espíritu aventurero, seguí explorando!"),
(DEFAULT, 3, 3, "Las fotos son impresionantes, deben haber sido momentos inolvidables!"),
(DEFAULT, 4, 3, "Tu galería de viajes es una fuente constante de inspiración."),
(DEFAULT, 4, 4, "¿Qué cámara utilizaste para tomar estas fotos? La calidad es impresionante."),
(DEFAULT, 4, 5, "La naturalidad en tus fotos de viajes es lo que más me gusta."),
(DEFAULT, 4, 1, "Tu pasión por explorar el mundo es realmente contagiosa."),
(DEFAULT, 5, 2, "Cada viaje es una lección de vida. ¿Qué has aprendido en este?"),
(DEFAULT, 5, 1, "Sigo esperando el día en que pueda visitar este lugar hermoso."),
(DEFAULT, 5, 4, "¡Me estás haciendo desear tomar un vuelo ahora mismo!"),
(DEFAULT, 5, 5, "Gracias por recordarnos que el mundo es un lugar hermoso que vale la pena explorar."),
(DEFAULT, 6, 1, "Estoy enamorado de este lugar gracias a tus fotos. ¿Es tan hermoso en persona como parece?"),
(DEFAULT, 6, 2, "Qué maravillosa experiencia de viaje. ¿Quién más se siente tentado a preparar su valija y unirse a esta aventura?"),
(DEFAULT, 6, 5, "Los viajes son una fuente inagotable de aprendizaje y crecimiento personal."),
(DEFAULT, 6, 4, "¡Qué envidia de ese lugar! ¿Cómo llegaste allí?"),
(DEFAULT, 7, 5, "¡Qué paisaje tan espectacular! Seguro que lo pasaste genial."),
(DEFAULT, 7, 1, "Esto me da ganas de planear mi próximo viaje. ¡Gracias por la inspiración!"),
(DEFAULT, 7, 2, "¡Estás viviendo la vida al máximo! "),
(DEFAULT, 7, 3, "¿Algún consejo para quienes quieren visitar ese lugar?"),
(DEFAULT, 8, 3, "¡Qué vista increíble! ¿Es tan hermoso como parece en la foto?"),
(DEFAULT, 8, 5, "¡Deseando estar allí ahora mismo!"),
(DEFAULT, 8, 1, "Me encantaría saber más sobre tu experiencia en este viaje."),
(DEFAULT, 8, 2, "¿Cuál fue tu parte favorita de este viaje?"),
(DEFAULT, 9, 3, "Estás haciendo que todos queramos viajar con vos."),
(DEFAULT, 9, 4, "Increíble foto, ¡debe haber sido una experiencia inolvidable!"),
(DEFAULT, 9, 2, "¿Algún momento destacado que quieras compartir con nosotros?"),
(DEFAULT, 9, 1, "Este lugar está definitivamente en mi lista de deseos de viaje ahora."),
(DEFAULT, 10, 2, "¡Qué aventura tan emocionante! ¿Tienes más fotos para compartir?"),
(DEFAULT, 10, 3, "Esa puesta de sol es de ensueño."),
(DEFAULT, 10, 4, "¿Algún consejo sobre lugares para comer o cosas que hacer allí?"),
(DEFAULT, 10, 1, "¡Qué maravilloso destino! ¿Cuánto tiempo estuviste allí?");