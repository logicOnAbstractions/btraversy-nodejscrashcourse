/* a concrete & usefule application of events
*
* this Logger obj. extends the EventEmitter class. when we call Logger.log(msg), the superclass manages the emission of an event, which in this ase
* we've defined as an "message" event. we've also added some custom characteristics to this event - and id using uuid() module, then we just tack onto
* that whatever msg was passed to us as an argument
*
* on the user-side (see main.js), we register a listener. see main.js for details, but essentially the listner is interested in the "message" type of events
* (could be others, could be many interested in that event as well). then the listener defines what happens on that event.
*
* this EventEmitter manages to tell everyone interested into whatever event hat it just happens, passes alongs any relevent content etc.
*  */

import EventEmitter from 'events'
import {v4} from 'uuid'         // they provide a wrapper - see uuid/wrapper.mjs, that's how you're supposed to know that stuff

console.log(v4())

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id:v4(), msg:msg})
    }
}

export {Logger}