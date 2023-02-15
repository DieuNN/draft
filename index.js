const https = require('https');
const fs = require('fs');
const http = require('http')
const express = require('express');

const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt')
};

const app = express()

const hostname = '0.0.0.0';
const port = 3001;
const securePort = 3443;


app.get('/', (req, res) => {
    res.send("Home")
})
app.get('/hello', (req, res) => {
    res.send('Hello, Your mom!');
});

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

https.createServer(options, app).listen(securePort, hostname, (req, res) => {
    console.log("Https server created")
});
http.createServer(app).listen(securePort, hostname, (req, res)=> {
    console.log("HTTP server created")
});

// app.listen(options, securePort, hostname, () => {
//     console.log(`Secure server running at https://${hostname}:${securePort}/`);
// });
