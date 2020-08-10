/* node is built around event-driven programming. so essentially you can create events & then have listeners for each of those events
* that define what happens once an event is triggered
* */

import EventEmitter from 'events'

//create an event emitter class
class MyEEmitter extends EventEmitter{

}

// init object

const myEmitter = new MyEEmitter();

//listener

myEmitter.on('event',()=>console.log(" an event what triggered!"))

// trigger an event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');