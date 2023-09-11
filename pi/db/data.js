const data= {
    usuarios:[
        {
            id:1,
            email: 'juan.holder@gmail.com',
            nombre: "Juan Holder",
            pass: 'Password123' ,
            fotoPerfil: '/img/juan.png',
            fecha: '15/05/1987',
            dni: '32123456'
        },
        {
            id:2,
            email: 'maria.rodriguez@gmail.com',
            nombre: "Maria Rodriguez",
            pass: 'SecurePass!23' ,
            fotoPerfil: '/img/maria.png',
            fecha: '20/09/1990',
            dni: '28987654'
        },
        {
            id:3,
            email: 'carlos.gonzalez@gmail.com',
            nombre: "Carlos Gonzalez",
            pass: 'Password456' ,
            fotoPerfil: '/img/carlos.png',
            fecha: '03/12/1985',
            dni: '35789123'
        },
        {
            id:4,
            email: 'paula.fernandez@gmail.com',
            nombre: "Paula Fernandez",
            pass: 'SecurePass123' ,
            fotoPerfil: '/img/paula.png',
            fecha: '10/11/1992',
            dni: '29876543'
        },
        {
            id:5,
            email: 'gonzalo.perez@gmail.com',
            nombre: "Gonzalo Perez",
            pass: 'Pass123word' ,
            fotoPerfil: '/img/gonzalo.png',
            fecha: '27/06/1989',
            dni: ' 26345678'
        },
        
    ],
    posteos: [
        {
            id:1,
            idUsuario: 1,
            nombreUsuario: "Juan Holder",
            nombreImg: "https://i.pinimg.com/564x/37/9a/b5/379ab510798c0e6928fbce586e3d90f4.jpg",
            textoPost:"La vida es corta, los viajes son largos.",
            fotoPerfil: '/img/juan.png',
            comentarios: [{
                id:1, 
                idPost: 1,
                idUsuario: 5,
                nombre: "Gonzalo Perez",
                textoComment: "Qué lugar tan hermoso, dónde estás??",
                nombreUsuario: "Juan Holder",

            },
            {
                id:2,
                idPost: 1,
                idUsuario: 2,
                nombreUsuario: "Maria Rodriguez",
                textoComment: "Quiero ir ahí! Podés recomendarme algún lugar para visitar?"
            },
            {
                id:3, 
                idPost: 1,
                idUsuario: 3,
                nombre: "Carlos Gonzalez",
                textoComment: "Definitivamente, tenés el don de capturar momentos especiales."
            },
            {
                id:4,  
                idPost: 1,
                idUsuario: 4,
                nombre: "Paula Fernandez",
                textoComment: "Gracias por llevarnos virtualmente con vos en tus viajes. Es un placer seguirte!!"
            }]
        },
        {
            id:2,
            idUsuario: 1,
            nombreUsuario: "Juan Holder",
            nombreImg: "https://i.pinimg.com/564x/4d/22/34/4d22349d367c30f7eafbe3bd11cebfe4.jpg",
            textoPost:"Los viajes te enseñan a apreciar la belleza de la simplicidad.",
            fotoPerfil: '/img/juan.png',
            comentarios: [{
                id:5,  
                idPost: 2,
                idUsuario: 5,
                nombre: "Gonzalo Perez",
                textoComment: "Tenés algún consejo para planificar un viaje como este?"
            },
            {
                id:6,  
                idPost: 2,
                idUsuario: 4,
                nombre: "Paula Fernandez",
                nombreUsuario: "",
                textoComment: "¡Qué suerte tenés de haber estado ahí! Debe haber sido una experiencia única."
                
            },
            {
                id:7,  
                idPost: 2,
                idUsuario: 2,
                nombreUsuario: "Maria Rodriguez",
                textoComment: "Estoy enamorado/a de este lugar gracias a tus fotos. Es así de lindo en persona?"
            },
            {
                id:8,  
                idPost: 2,
                idUsuario: 3,
                nombre: "Carlos Gonzalez",
                textoComment: "Tus viajes son una verdadera obra de arte. Seguí viviendo la vida al máximo!"
            }]
        },
        {
            id:3,
            idUsuario: 2,
            nombreUsuario: "Maria Rodriguez",
            nombreImg: "https://i.pinimg.com/564x/15/4c/9d/154c9d1148d37405652effe485d4faed.jpg",
            textoPost:"La mejor inversión es en experiencias, no en cosas materiales.",
            fotoPerfil: '/img/maria.png',
            comentarios: [{
                id:9,  
                idPost: 3,
                idUsuario: 4,
                nombre: "Paula Fernandez",
                textoComment: "Tu amor por los viajes realmente brilla en cada foto."
            },
            {
                id:10,  
                idPost: 3,
                idUsuario: 5,
                nombre: "Gonzalo Perez",
                textoComment: "Me encantaría escuchar la historia detrás de esta foto."
            },
            {
                id:11,  
                idPost: 3,
                idUsuario: 1,
                nombreUsuario: "Juan Holder",
                textoComment: "Me encanta tu espíritu aventurero, seguí explorando!"
            },
            {
                id:12,  
                idPost: 3,
                idUsuario: 3,
                nombreUsuario: "Carlos Gonzalez",
                textoComment: "Las fotos son impresionantes, deben haber sido momentos inolvidables!"
            }]
        },
        {
            id:4,
            idUsuario: 2,
            nombreUsuario: "Maria Rodriguez",
            nombreImg: "https://i.pinimg.com/564x/b3/de/5d/b3de5d44c827243aaeb04d147befcdfa.jpg",
            textoPost:"No hay mapa para los tesoros que encuentras mientras viajas.",
            fotoPerfil: '/img/maria.png',
            comentarios: [{
                id:13,  
                idPost: 4,
                idUsuario: 3,
                nombre: "Carlos Gonzalez",
                textoComment: "Tu galería de viajes es una fuente constante de inspiración."
            },
            {
                id:14,  
                idPost: 4,
                idUsuario: 4,
                nombre: "Paula Fernandez",
                textoComment: "¿Qué cámara utilizaste para tomar estas fotos? La calidad es impresionante."
            },
            {
                id:15,  
                idPost: 4,
                idUsuario: 5,
                nombre: "Gonzalo Perez",
                textoComment: "La naturalidad en tus fotos de viajes es lo que más me gusta."
            },
            {
                id:16,  
                idPost: 4,
                idUsuario: 1,
                nombreUsuario: "Juan Holder",
                textoComment: "Tu pasión por explorar el mundo es realmente contagiosa."
            }]
        },
        {
            id:5,
            idUsuario: 3,
            nombreUsuario: "Carlos Gonzalez",
            nombreImg: "https://viajes.nationalgeographic.com.es/medio/2019/03/27/bagan_5e8e026d_500x782.jpg",
            textoPost:"El mundo es un libro y aquellos que no viajan leen solo una página.",
            fotoPerfil: '/img/carlos.png',
            comentarios: [{
                id:17,  
                idPost: 5,
                idUsuario: 2,
                nombreUsuario: "Maria Rodriguez",
                textoComment: "Cada viaje es una lección de vida. ¿Qué has aprendido en este?"
            },
            {
                id:18,  
                idPost: 5,
                idUsuario: 1,
                nombre: "Juan Holder",
                textoComment: "Sigo esperando el día en que pueda visitar este lugar hermoso."
            },
            {
                id:19, 
                idPost: 5,
                idUsuario: 4,
                nombre: "Paula Fernandez",
                textoComment: "¡Me estás haciendo desear tomar un vuelo ahora mismo!"
            },
            {
                id:20,  
                idPost: 5,
                idUsuario: 5,
                nombre: "Gonzalo Perez",
                textoComment: "Gracias por recordarnos que el mundo es un lugar hermoso que vale la pena explorar."
            }]
        },
        {
            id:6,
            idUsuario: 3,
            nombreUsuario: "Carlos Gonzalez",
            nombreImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88yDNltUzMGdsh58ayNBSW4qLS6HcaydGTxFqffj0wpPIZkUlv1P1Ii_hfpNyuobv6io&usqp=CAU",
            textoPost:"Cada lugar tiene una historia, estoy aquí para escucharlas.",
            fotoPerfil: '/img/carlos.png',
            comentarios: [{
                id:21,  
                idPost: 6,
                idUsuario: 1,
                nombreUsuario: "Juan Holder",
                textoComment: "Estoy enamorado/a de este lugar gracias a tus fotos. ¿Es tan hermoso en persona como parece?"
            },
            {
                id:22,  
                idPost: 6,
                idUsuario: 2,
                nombreUsuario: "Maria Rodriguez",
                textoComment: "Qué maravillosa experiencia de viaje. ¿Quién más se siente tentado a empacar sus maletas y unirse a esta aventura?"
            },
            {
                id:23,  
                idPost: 6,
                idUsuario: 5,
                nombre: "Gonzalo Perez",
                textoComment: "Los viajes son una fuente inagotable de aprendizaje y crecimiento personal."
            },
            {
                id:24,  
                idPost: 6,
                idUsuario: 4,
                nombre: "Paula Fernandez",
                textoComment: "¡Qué envidia de ese lugar! ¿Cómo llegaste allí?"
            }]
        },
        {
            id:7,
            idUsuario: 4,
            nombreUsuario: "Paula Fernandez",
            nombreImg: "https://i.pinimg.com/564x/23/fb/aa/23fbaa667b4e6b09321a6b968b128198.jpg",
            textoPost:"Las mejores historias se escriben en la carretera.",
            fotoPerfil: '/img/paula.png',
            comentarios: [{
                id:25,  
                idPost: 7,
                idUsuario: 5,
                nombre: "Gonzalo Perez",
                textoComment: "¡Qué paisaje tan espectacular! Seguro que lo pasaste genial."
            },
            {
                id:26,  
                idPost: 7,
                idUsuario: 1,
                nombreUsuario: "Juan Holder",
                textoComment: "Esto me da ganas de planear mi próximo viaje. ¡Gracias por la inspiración!"
            },
            {
                id:27, 
                idPost: 7,
                idUsuario: 2,
                nombreUsuario: "Maria Rodriguez",
                textoComment: "¡Estás viviendo la vida al máximo! "
            },
            {
                id:28,  
                idPost: 7,
                idUsuario: 3,
                nombre: "Carlos Gonzalez",
                textoComment: "¿Algún consejo para quienes quieren visitar ese lugar?"
            }]
        },
        {
            id:8,
            idUsuario: 4,
            nombreUsuario: "Paula Fernandez",
            nombreImg: "https://i.pinimg.com/564x/e7/71/e8/e771e8b1994a91441f73216af860671f.jpg",
            textoPost:"Viajar es la mejor forma de reinventarse.",
            fotoPerfil: '/img/paula.png',
            comentarios: [        {
                id:29,  
                idPost: 8,
                idUsuario: 3,
                nombre: "Carlos Gonzalez",
                textoComment: "¡Qué vista increíble! ¿Es tan hermoso como parece en la foto?"
            },
            {
                id:30,  
                idPost: 8,
                idUsuario: 5,
                nombre: "Gonzalo Perez",
                textoComment: "¡Deseando estar allí ahora mismo! "
            },
            {
                id:31,  
                idPost: 8,
                idUsuario: 1,
                nombreUsuario: "Juan Holder",
                textoComment: "Me encantaría saber más sobre tu experiencia en este viaje."
            },
            {
                id:32,  
                idPost: 8,
                idUsuario: 2,
                nombreUsuario: "Maria Rodriguez",
                textoComment: "¿Cuál fue tu parte favorita de este viaje?"
            }]
        },
        {
            id:9,
            idUsuario: 5,
            nombreUsuario: "Gonzalo Perez",
            nombreImg: "https://i.pinimg.com/564x/e0/d3/49/e0d3495dcfb4af549c8b15b11931c3c5.jpg",
            textoPost:"Descubriendo nuevos horizontes y creando recuerdos inolvidables.",
            fotoPerfil: '/img/gonzalo.png',
            comentarios: [{
                id:33,  
                idPost: 9,
                idUsuario: 3,
                nombre: "Carlos Gonzalez",
                textoComment: "Estás haciendo que todos queramos viajar contigo. "
            },
            {
                id:34,  
                idPost: 9,
                idUsuario: 4,
                nombre: "Paula Fernandez",
                textoComment: "Increíble foto, ¡debe haber sido una experiencia inolvidable!"
            },
            {
                id:35,  
                idPost: 9,
                idUsuario: 2,
                nombre: "Maria Rodriguez",
                textoComment: "¿Algún momento destacado que quieras compartir con nosotros?"
            },
            {
                id:36, 
                idPost: 9,
                idUsuario: 1,
                nombreUsuario: "Juan Holder",
                textoComment: "Este lugar está definitivamente en mi lista de deseos de viaje ahora."
            }]
        },
        {
            id:10,
            idUsuario: 5,
            nombreUsuario: "Gonzalo Perez",
            nombreImg: "https://i.pinimg.com/564x/e3/89/cf/e389cfca3618ef65ef2e207a6712ef8f.jpg",
            textoPost:"Viajar es la única cosa que compras y que te hace más rico.",
            fotoPerfil: '/img/gonzalo.png',
            comentarios: [{
                id:37,  
                idPost: 10,
                idUsuario: 2,
                nombreUsuario: "Maria Rodriguez",
                textoComment: "¡Qué aventura tan emocionante! ¿Tienes más fotos para compartir?"
            },
            {
                id:38,  
                idPost: 10,
                idUsuario: 3,
                nombre: "Carlos Gonzalez",
                textoComment: "Esa puesta de sol es de ensueño. "
            },
            {
                id:39,  
                idPost: 10,
                idUsuario: 4,
                nombre: "Paula Fernandez",
                textoComment: "¿Algún consejo sobre lugares para comer o cosas que hacer allí?"
            },
            {
                id:40,  
                idPost: 10,
                idUsuario: 1,
                nombre: "Juan Holder",
                textoComment: "¡Qué maravilloso destino! ¿Cuánto tiempo estuviste allí?"
            }]
        },
        
    ],
};

module.exports=data;
