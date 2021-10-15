const http = require("http");
const url = require("url");
const fs = require("fs");
const db = require("./database/db").db;

const server = http.createServer().listen(5000);

server.on("request", (req, res) => {
  const path = url.parse(req.url).pathname;

  if (path == "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    });
  } else if (path == "/api/db") {
    db.emit(req.method, req, res);
  }
});

console.log("Server start at 5000 port");
