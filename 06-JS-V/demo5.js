function EstudiantesHenry(nombre, apellido) {
    this.firstName = nombre
    this.lastName = apellido
    this.esEstudiante = true
    this.materia = ['html', 'css', 'git', 'github']
}

EstudiantesHenry.prototype.presentarHenryChallenge = function() {
    return console.log('El estudiante ' + this.firstName + ' ' + this.lastName + ' Presentó el Henry Challenge')
}

EstudiantesHenry.prototype.Saludar = function(idioma) {
    if(idioma === 'en') return 'Hi ' + this.firstName
    else return 'Hola ' + this.firstName
}

EstudiantesHenry.prototype.despedida = function(idioma) {
    if(idioma === 'en') return 'Bye ' + this.firstName
    else return 'Adios ' + this.firstName
}

class EstudianteHenryClass {
    constructor(nombre, apellido) {
        this.firstName = nombre || 'nombre no enviado'
        this.lastName = apellido || 'apellido no enviado'
        this.esEstudiante = true
        this.materias = ['html', 'css', 'git', 'github']
    }

    presentarHenryChallengeClass () {
        return console.log('El estudiante ' + this.firstName + ' ' + this.lastName + ' Presentó el Henry Challenge')
    }

    saludarClass(idioma) {
        if(idioma === 'en') return 'Hi ' + this.firstName
        else return 'Hola ' + this.firstName
    }

    despedidaClass(idioma) {
        if(idioma === 'en') return 'Bye ' + this.firstName
        else return 'Adios ' + this.firstName
    }
}

class EstudianteGraduado extends EstudianteHenryClass {
    constructor(nombre, apellido, esEstudiante, materias, esGraduado) {
        super(nombre, apellido, esEstudiante, materias)
        this.esGraduado = true
    }

    postularseParaTrabajo() {
        return console.log('El graduado ' + this.firstName + ' Se postula a un trabajo')
    }
}

let estudianteGraduado1 = new EstudianteGraduado('Eduardo', 'Nalvarte')
console.log(estudianteGraduado1)

estudianteGraduado1.presentarHenryChallengeClass()
estudianteGraduado1.postularseParaTrabajo()
