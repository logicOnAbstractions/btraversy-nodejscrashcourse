import {Logger} from "./logger.js";

const logger = new Logger()

/* so basically, we instantiated a logger, with a callback, and then logged a bunchf ot hings. because our listerner has a uuid() call, we can see that each
* even was separate & trigger the listener */
logger.on('message', (data)=>console.log('called Listener:', data))
logger.log("hellow world!")
logger.log("hellow world again!")
logger.log("hellow world some more!")
logger.log("hellow world tired yet?")
logger.log("ok bye!")
