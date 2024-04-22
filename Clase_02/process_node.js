// el objeto global del proceso que se esta ejecutando

console.log('hola')
console.log(process.argv)
//console.log(process.env) // variables de entorno ---> se ocupan todos los dias en backend
                                               //---> se ocupan para ocultar datos sensibles, no lo puede ver nadie dentro de tu codigo
                                               //---> como passwords, tokens
// manejar eventos
process.on('beforeExit', () => {

    // puedo ejecutar una funcion antes de que se termine de ejecutar todo el codigo
    // ej. cerrar sesiones de base de datos, mandar mensajes, cerrar funciones del OS
    console.log("Regresa pronto")
})