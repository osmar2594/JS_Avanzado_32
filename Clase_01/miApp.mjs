import colors from 'picocolors'
import inquirer from 'inquirer'

//console.log(colors.yellow("Bienvenido a mi super app"))

async function main(){
    console.log(colors.red("Bienvenidos a la super App"))

///nombre del usuario
const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Como te llamas?'

})
console.log(colors.blue(`Hola, ${name}`))

// edad del usuario
const edad = await inquirer.prompt({
    type: 'input',
    name: 'edad',
    message: 'Cual es tu edad?'
})

if (edad > 18){
    console.log(colors.green(`Es major de edad`))
} else{
    console.log(colors.greenBright(`Es menor de edad`))
}

// direccion del usuario
const {address} = await inquirer.prompt({
    type: 'input',
    name: 'address',
    message: 'Provide address please (number and street)'
})

if(address=="11067 Decatur"){
    console.log(colors.red(`La direecion ${address} ya esta en record`))
} else{
    console.log(colors.yellow(`La direccion ${address} es nueva`))
    
}



}

main()