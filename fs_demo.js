import {Person} from './person.js'
import path from 'path'
import fs from 'fs'

let me = new Person()
console.log(me.greetings())

const dirname = 'test'
const fname = 'hello.txt'

// let's create a directory, if it doesn't already exists & manage stuff
fs.mkdir(path.join('./',dirname), {}, function (err) {
    if (err && err.code!=="EEXIST") {throw err}
    else if (err) {
        console.log("something wrong - we already have that folder: " + err)
    } else {
        console.log("folder created")
    }
})

// create & write to file
fs.writeFile(path.join('./',dirname,fname), 'hello world', err => {
    if (err) throw err;
    console.log("file created...")
    after_mkdir()                   // since writeFile is asynx, if we appended to it in a sequential fs.writeFile() call we may end up writing the 2nd one before the first one... must make the next call in callback to ensure sequentiality
})

// read a file
fs.readFile(path.join('./', dirname,fname),'utf8', (err, data) => {
    if (err) throw err;
    console.log("reading the file: \n" + data)
})







// can put that at the end of the file because functions are hoisted in javascript
function after_mkdir() {
    console.log("File was indeed create or already existed and that async call is now down. we can safely append to it here")
    // appending to the file if it exists - WARNING - those are by default async calls so you get get a race conditions!!!!
    fs.appendFile(path.join('./', dirname, fname), '\n just wanted to add a little something of mine...', err => {
        if (err) throw err;
        console.log("we also have appended to it now.")
    })

}