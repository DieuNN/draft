const https = require('https');
const fs = require('fs');
const http = require('http')

const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt')
};

const hostname = '0.0.0.0';
const port = 3001;
const securePort = 3443;

const httpsServer = https.createServer(options);

const httpServer = http.createServer();



httpServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

httpsServer.listen(securePort, hostname, () => {
    console.log(`Secure server running at https://${hostname}:${securePort}/`);
});
