import {Logger} from "./logger.js";

const logger = new Logger()

/* so basically, we instantiated a logger, with a callback, and then logged a bunchf ot hings. because our listerner has a uuid() call, we can see that each
* even was separate & trigger the listener */
logger.on('message', (data)=>console.log('called Listener:', data))     // registering something to when a "message" event is triggered anywhere
logger.log("hellow world!")                                             // for now we're just triggering events right here, but could be happening async somewhere else as well and we'd console.log their msg if they did along with the custom uuid() etc.
logger.log("hellow world again!")
logger.log("hellow world some more!")
logger.log("hellow world tired yet?")
logger.log("ok bye!")
