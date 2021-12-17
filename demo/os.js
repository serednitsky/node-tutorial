const os = require('os')

console.log('os: ', os.platform())
console.log('arch processor: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('Free memory: ', os.freemem())
console.log('Total memory: ', os.totalmem())
console.log('Home directory: ', os.homedir())
console.log('Runtime: ', os.uptime())