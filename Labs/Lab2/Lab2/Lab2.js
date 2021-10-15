const http = require("http");
const fs = require("fs");
const path = require("path")
const PORT = 5000;

const server = http.createServer( (req, res) => {
    let url = req.url;
    console.log(url);
    switch (url) {
        case "/html": {
          res.writeHead(200, {'Content-Type': 'text/html'});
            const filePath = path.join("index.html");
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    throw err;
                }
                res.end(content);
            })
            break;
        }
        case "/png": {
            const filePath = path.join("avatar.png");
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    throw err;
                }
                res.end(content);
            })
            break;
        }
        case "/api/name": {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("Kravchenko Kirill Vladimirovich");
            break;
        }
        case "/xmlhttprequest": {
            const filePath = path.join("xmlhttprequest.html");
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    throw err;
                }
                res.end(content);
            })
            break;
        }
        case "/fetch": {
            const filePath = path.join("fetch.html");
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    throw err;
                }
                res.end(content);
            })
            break;
        }
        case "/jquery": {
            const filePath = path.join("jquery.html");
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    throw err;
                }
                res.end(content);
            })
            break;
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})
