const https = require('https');
const fs = require('fs');
const http = require('http')
const express = require('express');
const path = require("path");

const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt')
};

const app = express()

app.set("view engine", 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Express.js and EJS Example', message: 'Hello, World!' });
});

const hostname = '0.0.0.0';
const port = 3000;
const securePort = 3443;

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
