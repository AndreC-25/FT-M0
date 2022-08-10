var aura = {
    nombre : 'Aura',
    apellido : 'Bohorquez',
    DNI : '11111111',
    direccion : 'cale falsa 123',
    edad : 25,
    esAlumno : true,
    saludar : function(){
        console.log('Hola Aura')
        return 0
    },
    hobbies : ['estudiar js', 'correr']
}

var gianmarco = {
    edad : 20,
    direccion : 'siempre viva 123',
    DNI : '2222222',
    apellido : 'Valentín',
    nombre : 'Gianmarco',
    saludar : function(){
        console.log('Hola Gianmarco')
    },
    hobbies : ['estudiar js', 'correr']
}

var arrayObj = {
    0 : 'valor 1',
    1 : 'valor 2',
    2 : 'valor 3'
}

var array = [1, 2, 3, 4, 5, 6]


// console.log(Object.keys(aura))


// console.log(aura['DNI'])
// console.log(aura.DNI)

// console.log(gianmarco['pasaporte'])
// console.log(gianmarco.pasaporte)
  

// console.log(aura)

// aura.DNI = 55555555;
// aura.pasaporte = 'AE12345678'
// aura.pasaporte = 'PF123456'

// console.log(aura)


let palabra = 'nombre';

// console.log(aura[palabra])
// console.log(aura['nombre'])

// console.log(aura.saludar())


// var alumnos = [ {
//     nombre: 'Emi',
//     edad: 23,
//     hobbies: ['correr', 'dormir', 'na ar'],
//     amigos: [ {
//         nombre: 'Martin',
//         familia: [ { nombre: 'familia 1' } ]
//     },
//     {
//         nombre: 'Leo',
//         familia: [ { nombre: 'familia 2'} ] 
//     } ]
// }, {
//     nombre: 'Franco',
//     edad: 21,
//     hobbies: ['futbol', 'golf'],
//     amigos: [ {
//         nombre: 'Emi',
//         familia: [ { nombre: 'familia 3' } ]
//     }, {
//         nombre: 'Jimmy',
//         familia: [ { nombre: 'amilia 4' } ]
//     }, {
//         nombre: 'Matias',
//         familia: [ { nombre: 'familia 5'} ]
//     } ]    
// }
// ]

// console.log(alumnos[1].amigos[0].familia[0].nombre)


// var persona1 = {
//     nombre: 'Toni',
//     saludar: function() {
//         console.log('Hola, Toni');
//     }
// };

// var persona2 = {
//     nombre: 'Jimmy',
//     saludar: function() {
//         console.log('Hola, ' + this.nombre);
//     }
// }

// persona1.saludar()

// persona2.saludar()


function saludarPersona() {
    console.log('Hola, ' + this.nombre + ' ' + this.apellido);
}

var persona1 = {
    nombre: 'Toni',
    apellido: 'tralice',
    saludar: saludarPersona
}

var persona2 = {
    nombre: 'Jimmy',
    apellido: 'cardona',
    saludar: saludarPersona
}

persona1.saludar()
persona2.saludar()