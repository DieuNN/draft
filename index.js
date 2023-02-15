const https = require('https');
const fs = require('fs');
const http = require('http')
const express = require('express');

const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt')
};

const app = express()

app.use(express.static('./'));

app.get('/', function(req, res) {
    res.render('index.html');
});

const hostname = '0.0.0.0';
const port = 3002;
const securePort = 3444;

app.get('/hello', (req, res) => {
    res.send('Hello, Your mom!');
});

app.get("/healthz", (req, res)=> {
    res.status(200)
    res.send("OK")
})

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

https.createServer(options, app).listen(securePort, hostname, (req, res) => {
    console.log("Https server created")
});
http.createServer(app).listen(port, hostname, (req, res)=> {
    console.log("HTTP server created")
});

// app.listen(options, securePort, hostname, () => {
//     console.log(`Secure server running at https://${hostname}:${securePort}/`);
// });
