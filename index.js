import http from 'http'
import path from 'path'
import fs from 'fs'

/* a still basic but slightly more complex server compared to the http demo
*
* see also the comment in package.json[script][_comment] about running the server with nodemon, which allows live reload like django in debug mode
* */
const server = http.createServer((rqst, resp)=>{
    /*hardcoded basic examples just to show basic stuff*/
    if (rqst.url === '/') {
        fs.readFile(path.join('./','public','index.html'),(err, content)=>{
            if (err) throw err;
            resp.writeHead(200, {'Content-Type':'text/html' })
            resp.end(content)
        })
    }
    if (rqst.url === '/api/users') {
        const users = [
            {name:'Bob Smith', age: 40},
            {name:'John Doe', age: 22},
        ];
        resp.writeHead(200, {'Content_type':'application/json'})
        resp.end(JSON.stringify(users))
    }

    /* okay now let's build filepath dynamically instead of hardcoding it all as per above*/
    let filepath = path.join('./', 'public', rqst.url==='/home'?'index.html':rqst.url)          // the endpointurl decides what gets returned
    // get file extensino to set proper Content-Type
    let extension = path.extname(filepath)                  // get the extension dynamically to set teh Content-Type accordingly
    let contentType = 'text/html'                           //default, most often used
    switch(extension) {
        case '.js':
            contentType = 'text/javascript';
            break
        case '.css':
            contentType = 'text/css';
            break
        case '.json':
            contentType = 'application/json';
            break
        case '.png':
            contentType = 'image/png';
            break
        case '.jpg':
            contentType = 'image/jpg';
            break
    }
//    read file
    fs.readFile(filepath, (err, content)=>{
        if (err) {
            if (err.code=='ENOENT')   {                     //    page not found
                fs.readFile(path.join('./', 'public', '404.html'), (err, content)=>{
                    resp.writeHead(200, {'Content_type':contentType});
                    resp.end(content, 'utf8');
                })
            } else {                                        //    other error likely server-side, reutrn 500 + the code
                resp.writeHead(500);
                resp.end(`server error ${err.code}`)
            }
        } else {                                            // success, use dynamically set Content-Type
            resp.writeHead(200, {'Content-Type':contentType })
            resp.end(content, 'utf8')

        }
    })

});

const PORT = process.env.PORT || 5000;                                      // set port in environement vars, but set a default if the var isn't set
server.listen(PORT, ()=>console.log(`server running on :${PORT}`))