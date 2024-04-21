
const fs = require('node:fs')
// file system => sistema operativo

const path = require('node:path')

const path_file = path.join('recursos', 'lista.txt')
console.log(path_file)


const file = fs.readFile(path_file, 'utf-8', (err, info) => {
    if(err) {
        console.log(err)
        return (err)
    }
    console.log(info)
})

