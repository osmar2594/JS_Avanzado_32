const fs = require('node:fs')
// file system => sistema operativo

const path = require('node:path')
// path

const os = require('node:os')
// sistema operativo

console.log('el nombre del host es: ' + os.hostname())
console.log('el numero de CPUs es: ' + os.cpus().length)



// Funcion syncrona = se resuelven de inmediation
// Funcion asyncrona = tardan en resolverse

// Llamada Promesa o Asyncrona
const file = fs.readFile('./lista.txt', 'utf-8', (err, info) => {
    if(err){
        console.log(err);
        return err        
    }
    console.log(info)
})



// // puedo cerrar sesiones de base de datos
// //mandar mensajes
process.on('beforeExit', () => {
    console.log('Come back soon!')
    
})