import http from 'http'

/* this creates the most basic server possible. of course you'd typically use express-js or someething in reality but it shows the basics */

// create the server obj
http.createServer((rqst, resp)=>{
    resp.write('hello world')
    resp.end()
}).listen(5000, ()=>console.log('server is up & running!'))

// returns hellow world on localhost:5000 after running $> node http_demo.js

