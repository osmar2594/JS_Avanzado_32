import colors from 'picocolors'
import inquerer from 'inquirer'


//Asyncrona

    async function main(){
        console.log(colors.yellow("Bienvenido a mi super app"))

        const {name} = await inquerer.prompt({
            type: "input",
            name: "name",
            message: "Como te llamas?"
        })

        console.log(colors.green(`Hola, ${name}`))

        const {edad} = await inquerer.prompt({
            type:"input",
            name:"edad",
            message:"Cual es tu edad?"
        })

        if(edad >= 18){
            console.log(colors.bgMagenta(`Perfecto, eres mayor de edad`))
        } else {
            console.log(colors.bgCyan(`Estas chavo todavia`))
        }


    }

    main()


