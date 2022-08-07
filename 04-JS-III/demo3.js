var array = [1, 2, 3, 4, 5];
var lista = ['Eduardo', 'André', 'Nalvarte', 'Cabrejos'];

// console.log(array)
// console.log(lista)

// console.log(lista[0])
// console.log(lista[1])
// console.log(lista[2])
// console.log(lista[3])
// console.log(lista[4])
// console.log(lista[5])
// console.log(lista[200])

// array[0] = 'cambie el numero por este string'

// console.log(array)

// console.log(array.length)

// console.log(array[array.length - 1])


//  # Funcionalidades del array

// # array.length  -->  para contar la cantidad de elementos

// # array.push()  -->  agregar un elemnto al ultimo de la lista

// console.log(array[6][1])

// array.push(lista)
// array.push('nuevo espacio')
// lista.push([0, 'Clase de JS III'])
// array.push(lista)


// console.log(array[5][4][1])


// # var item = array.pop()  -->  retirar el ultinmo elemento de las lista

// # array.unshift(6)  -->  Agregar elementos al inicio de la lista

// # var item = array.shift()  -->  Retirar elemento del inicio de la lista

for (let i = 0; i < lista.length; i++) {
    lista[i] = lista[i] + i
}
console.log(lista)