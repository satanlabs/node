var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('urls.log', new Date().toISOString() + ' - \n' + entry + '\n');
};

var server = http.createServer(function (req, res) {
        log('\treq.method:'+req.method + "\n\treq.url:"+ req.url +"\n\treq.headers:" + JSON.stringify(req.headers));

        let body = [];
        req.on('data', (chunk) => {
            //this chunk is in hexa-decimal.
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            console.log("req.body:" ,body);
            // at this point, `body` has the entire request body stored in it as a string
        });
       
        res.writeHead(200, 'OK', {'Content-Type': 'text/html' , "Some-Custom-Header": "Hello, India"});
        res.write(html);
        res.end();
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
