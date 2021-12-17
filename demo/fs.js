//File system
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }
//
//     console.log('Dir create')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'hello nodejs', err => {
//     if (err) {
//         throw err
//     }
//
//     console.log('File created')
//
//     fs.appendFile(filePath, '\hHello again nodejs', err => {
//         if (err) {
//             throw err
//         }
//
//         console.log('File created')
//     })
// })

fs.readFile(filePath,  'utf-8',(err, content) => {
    if (err) {
        throw err
    }

    const data = Buffer.from(content)
    console.log('Content: ',data.toString())
})

