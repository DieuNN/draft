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
    res.render('empty');
});

// Gioi thieu cong ty
app.get('/gioi-thieu-cong-ty', (req, res)=> {
    res.render("gioi_thieu/gioi_thieu_cong_ty")
})
app.get('/lich-su-hinh-thanh', (req, res)=> {
    res.render("gioi_thieu/lich_su_hinh_thanh")
})
app.get('/doi-tac', (req, res)=> {
    res.render("gioi_thieu/doi_tac")
})
app.get('/doi-ngu-nhan-su', (req, res)=> {
    res.render("gioi_thieu/doi_ngu_nhan_su")
})




const hostname = 'localhost';
const port = 3000;
const securePort = 3443;

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
