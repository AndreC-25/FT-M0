// function muestra(algo){
//     if(algo > 1 && algo > 2 && algo > 3)
//     return 'Algo es mayor que 1 2 y 3'
//     else return 'Algo no es mayor que 1 2 y 3'
// }

// console.log(muestra(2))


//FOR

// function mostrarNumeros(){

//     for(var i = 0; i <= 1000; i ++){
//         if(i > 500) console.log('Numero mayor que 500')
//         else console.log('Numero menor que 500')
//         console.log('Numero siguiente', i)
//     }

// }

// mostrarNumeros()

// function mostrarNumeros(){

//     for(var i = 0; i <= 1000; i ++){
//         for(var j = 0; j <= 1000; j++){
//             console.log(i, j)
//         }
//     }

// }

// mostrarNumeros()


//WHILE

// function mostrarNumeros(){

//     var i = 0;
//     while(i <= 100){
//         console.log(i)
//         i++;
//     }

// }

// mostrarNumeros()


//SWITCH

// function mostrarNumeros(saludo){

//     switch (saludo) {
//         case 'en':
//             console.log('Hi')
//             return;
//         case 'en':
//             return console.log('Hola')
//         default:
//             return console.log('nigun idioma conocido');
//     }

// }

// mostrarNumeros('en')


//DO  WHILE

function mostarNumeros() {
    
    var i = 0
    do {
        console.log(i)
        i++;
    } while (i <= 100);

}

mostarNumeros()