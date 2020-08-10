/* a concrete & usefule application of events */

import EventEmitter from 'events'
import {v4} from 'uuid'         // they provide a wrapper - see uuid/wrapper.mjs, that's how you're supposed to know that stuff

console.log(v4())

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id:v4(), msg:msg})
    }
}

export {Logger}