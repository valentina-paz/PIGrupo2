const data= {
    usuarios:[
        {
            id:1,
            email: 'juan.holder@example.com',
            pass: 'Password123' ,
            fotoPerfil: '/img/juan.png',
            fecha: '15/05/1987',
            dni: '32123456'
        },
        {
            id:2,
            email: 'maria.rodriguez@example.com',
            pass: 'SecurePass!23' ,
            fotoPerfil: '/img/maria.png',
            fecha: '20/09/1990',
            dni: '28987654'
        },
        {
            id:3,
            email: 'carlos.gonzalez@example.com',
            pass: 'Password456' ,
            fotoPerfil: '/img/carlos.png',
            fecha: '03/12/1985',
            dni: '35789123'
        },
        {
            id:4,
            email: 'paula.fernandez@example.com',
            pass: 'SecurePass123' ,
            fotoPerfil: '/img/paula.png',
            fecha: '10/11/1992',
            dni: '29876543'
        },
        {
            id:5,
            email: 'gonzalo.perez@example.com',
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
            nombreImg: "Bali",
            textoPost:"La vida es corta, los viajes son largos.",
            comentarios: [{
                id:1, 
                idPost: 1,
                idUsuario: 1,
                textoComment: "Qué lugar tan hermoso, dónde estás??"
            },
            {
                id:2,
                idPost: 1,
                idUsuario: 2,
                textoComment: "Quiero ir ahí! Podés recomendarme algún lugar para visitar?"
            },
            {
                id:3, 
                idPost: 1,
                idUsuario: 3,
                textoComment: "Definitivamente, tenés el don de capturar momentos especiales."
            },
            {
                id:4,  
                idPost: 1,
                idUsuario: 4,
                textoComment: "Gracias por llevarnos virtualmente con vos en tus viajes. Es un placer seguirte!!"
            }]
        },
        {
            id:2,
            idUsuario: 1,
            nombreImg: "Paris",
            textoPost:"Los viajes te enseñan a apreciar la belleza de la simplicidad.",
            comentarios: [{
                id:5,  
                idPost: 2,
                idUsuario: 5,
                textoComment: "Tenés algún consejo para planificar un viaje como este?"
            },
            {
                id:6,  
                idPost: 2,
                idUsuario: 1,
                textoComment: "¡Qué suerte tenés de haber estado ahí! Debe haber sido una experiencia única."
            },
            {
                id:7,  
                idPost: 2,
                idUsuario: 2,
                textoComment: "Estoy enamorado/a de este lugar gracias a tus fotos. Es así de lindo en persona?"
            },
            {
                id:8,  
                idPost: 2,
                idUsuario: 3,
                textoComment: "Tus viajes son una verdadera obra de arte. Seguí viviendo la vida al máximo!"
            }]
        },
        {
            id:3,
            idUsuario: 2,
            nombreImg: "Londres",
            textoPost:"La mejor inversión es en experiencias, no en cosas materiales.",
            comentarios: [{
                id:9,  
                idPost: 3,
                idUsuario: 4,
                textoComment: "Tu amor por los viajes realmente brilla en cada foto."
            },
            {
                id:10,  
                idPost: 3,
                idUsuario: 5,
                textoComment: "Me encantaría escuchar la historia detrás de esta foto."
            },
            {
                id:11,  
                idPost: 3,
                idUsuario: 1,
                textoComment: "Me encanta tu espíritu aventurero, seguí explorando!"
            },
            {
                id:12,  
                idPost: 3,
                idUsuario: 2,
                textoComment: "Las fotos son impresionantes, deben haber sido momentos inolvidables!"
            }]
        },
        {
            id:4,
            idUsuario: 2,
            nombreImg: "Indonesia",
            textoPost:"No hay mapa para los tesoros que encuentras mientras viajas.",
            comentarios: [{
                id:13,  
                idPost: 4,
                idUsuario: 3,
                textoComment: "Tu galería de viajes es una fuente constante de inspiración."
            },
            {
                id:14,  
                idPost: 4,
                idUsuario: 4,
                textoComment: "¿Qué cámara utilizaste para tomar estas fotos? La calidad es impresionante."
            },
            {
                id:15,  
                idPost: 4,
                idUsuario: 5,
                textoComment: "La naturalidad en tus fotos de viajes es lo que más me gusta."
            },
            {
                id:16,  
                idPost: 4,
                idUsuario: 1,
                textoComment: "Tu pasión por explorar el mundo es realmente contagiosa."
            }]
        },
        {
            id:5,
            idUsuario: 3,
            nombreImg: "Amsterdam",
            textoPost:"El mundo es un libro y aquellos que no viajan leen solo una página.",
            comentarios: [{
                id:17,  
                idPost: 5,
                idUsuario: 2,
                textoComment: "Cada viaje es una lección de vida. ¿Qué has aprendido en este?"
            },
            {
                id:18,  
                idPost: 5,
                idUsuario: 3,
                textoComment: "Sigo esperando el día en que pueda visitar este lugar hermoso."
            },
            {
                id:19, 
                idPost: 5,
                idUsuario: 4,
                textoComment: "¡Me estás haciendo desear tomar un vuelo ahora mismo!"
            },
            {
                id:20,  
                idPost: 5,
                idUsuario: 5,
                textoComment: "Gracias por recordarnos que el mundo es un lugar hermoso que vale la pena explorar."
            }]
        },
        {
            id:6,
            idUsuario: 3,
            nombreImg: "Moscu",
            textoPost:"Cada lugar tiene una historia, estoy aquí para escucharlas.",
            comentarios: [{
                id:21,  
                idPost: 6,
                idUsuario: 1,
                textoComment: "Estoy enamorado/a de este lugar gracias a tus fotos. ¿Es tan hermoso en persona como parece?"
            },
            {
                id:22,  
                idPost: 6,
                idUsuario: 2,
                textoComment: "Qué maravillosa experiencia de viaje. ¿Quién más se siente tentado a empacar sus maletas y unirse a esta aventura?"
            },
            {
                id:23,  
                idPost: 6,
                idUsuario: 3,
                textoComment: "Los viajes son una fuente inagotable de aprendizaje y crecimiento personal."
            },
            {
                id:24,  
                idPost: 6,
                idUsuario: 4,
                textoComment: "¡Qué envidia de ese lugar! ¿Cómo llegaste allí?"
            }]
        },
        {
            id:7,
            idUsuario: 4,
            nombreImg: "Barcelona",
            textoPost:"Las mejores historias se escriben en la carretera.",
            comentarios: [{
                id:25,  
                idPost: 7,
                idUsuario: 5,
                textoComment: "¡Qué paisaje tan espectacular! Seguro que lo pasaste genial."
            },
            {
                id:26,  
                idPost: 7,
                idUsuario: 1,
                textoComment: "Esto me da ganas de planear mi próximo viaje. ¡Gracias por la inspiración!"
            },
            {
                id:27, 
                idPost: 7,
                idUsuario: 2,
                textoComment: "¡Estás viviendo la vida al máximo! "
            },
            {
                id:28,  
                idPost: 7,
                idUsuario: 3,
                textoComment: "¿Algún consejo para quienes quieren visitar ese lugar?"
            }]
        },
        {
            id:8,
            idUsuario: 4,
            nombreImg: "Madrid",
            textoPost:"Viajar es la mejor forma de reinventarse.",
            comentarios: [        {
                id:29,  
                idPost: 8,
                idUsuario: 4,
                textoComment: "¡Qué vista increíble! ¿Es tan hermoso como parece en la foto?"
            },
            {
                id:30,  
                idPost: 8,
                idUsuario: 5,
                textoComment: "¡Deseando estar allí ahora mismo! "
            },
            {
                id:31,  
                idPost: 8,
                idUsuario: 1,
                textoComment: "Me encantaría saber más sobre tu experiencia en este viaje."
            },
            {
                id:32,  
                idPost: 8,
                idUsuario: 2,
                textoComment: "¿Cuál fue tu parte favorita de este viaje?"
            }]
        },
        {
            id:9,
            idUsuario: 5,
            nombreImg: "Bariloche",
            textoPost:"Descubriendo nuevos horizontes y creando recuerdos inolvidables.",
            comentarios: [{
                id:33,  
                idPost: 9,
                idUsuario: 3,
                textoComment: "Estás haciendo que todos queramos viajar contigo. "
            },
            {
                id:34,  
                idPost: 9,
                idUsuario: 4,
                textoComment: "Increíble foto, ¡debe haber sido una experiencia inolvidable!"
            },
            {
                id:35,  
                idPost: 9,
                idUsuario: 5,
                textoComment: "¿Algún momento destacado que quieras compartir con nosotros?"
            },
            {
                id:36, 
                idPost: 9,
                idUsuario: 1,
                textoComment: "Este lugar está definitivamente en mi lista de deseos de viaje ahora."
            }]
        },
        {
            id:10,
            idUsuario: 5,
            nombreImg: "Salta",
            textoPost:"Viajar es la única cosa que compras y que te hace más rico.",
            comentarios: [{
                id:37,  
                idPost: 10,
                idUsuario: 2,
                textoComment: "¡Qué aventura tan emocionante! ¿Tienes más fotos para compartir?"
            },
            {
                id:38,  
                idPost: 10,
                idUsuario: 3,
                textoComment: "Esa puesta de sol es de ensueño. "
            },
            {
                id:39,  
                idPost: 10,
                idUsuario: 4,
                textoComment: "¿Algún consejo sobre lugares para comer o cosas que hacer allí?"
            },
            {
                id:40,  
                idPost: 10,
                idUsuario: 5,
                textoComment: "¡Qué maravilloso destino! ¿Cuánto tiempo estuviste allí?"
            }]
        },
        
    ],
};

module.exports=data;
