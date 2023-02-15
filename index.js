const https = require('https');
const fs = require('fs');
const http = require('http')

const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt')
};

const hostname = 'localhost';
const port = 3000;
const securePort = 3443;

const httpsServer = https.createServer(options, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

const httpServer = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});



httpServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

httpsServer.listen(securePort, hostname, () => {
    console.log(`Secure server running at https://${hostname}:${securePort}/`);
});
