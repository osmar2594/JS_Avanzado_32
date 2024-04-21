const {
    suma, resta, multi, division, mod
} = require('./operaciones')

const {
    vehiculos
} = require('./CONST')

const os = require('node:os')

console.log(suma(20, 10))
console.log(resta(20, 10))
console.log(multi(20, 10))
console.log(division(20, 10))

console.log(mod(10, 20))

vehiculos.forEach(element => {
    console.log("El modelo del carro es:" + element.modelo)
    
})


console.log(' nombre del host ' + os.hostname())
