import os from 'os'

// platform
console.log(os.platform())

// cpu architecture
console.log(os.arch())

// cpu cores
console.log(os.cpus())

// memory
console.log(os.freemem())

// total meme
console.log( os.freemem()/os.totalmem()*100 + "%")
console.log(os.uptime())
console.log(os.homedir())