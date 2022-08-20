// FUNCIONES

function decirHolaAlUsuario(usuario) {
        return 'Hola ' + usuario + '!';
}

function decirAdiosAlUsuario(usuario) {
        return 'Adiós ' + usuario + '!';
}


function crearSaludo(usuario, cb) {
        return cb(usuario);
}


// console.log(decirHolaAlUsuario('Eduardo'))
// console.log(decirAdiosAlUsuario('Eduardo'))


// crearSaludo('Dan', decirHolaAlUsuario); // 'Hello Dan!'
// crearSaludo('Dan', decirAdiosAlUsuario);



// ARREGLOS

var alumnos = ['mati', 'leo', 'tincho', 'emi', 'jimmy', 'franco'];
var edadesAlumnos = [20, 23, 22, 20, 24, 25];


// sin callbacks

// for (var i = 0; i < alumnos.length; i++) {
//         if(alumnos[i] === 'tincho') return;
//         console.log(alumnos[i]); 
// }


// function mostrarAlumno(alumno) {
//         console.log('hola ' + alumno)
// }


alumnos.forEach(                                //No se
        function(elemento, i) {
                // console.log('hola desde el forEach ' + elemento + ' ' + i)
        }
)


var resultadoMap = alumnos.map( function(alumno, i) {                     //Obtengo un array      
        return 'Hola desde Map ' + alumno + ' ' + i      
} )

// console.log(resultadoMap)


var resultadoReduce = edadesAlumnos.reduce( function(acumulador, item, i) {    //Obtengo una valor
        if(item === 23 || i === 0) {

        } else {
                acumulador = acumulador + item
        }
        return acumulador;
}, 0)

console.log(resultadoReduce)


