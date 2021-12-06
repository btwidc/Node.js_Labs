const net = require('net');

let HOST = '0.0.0.0';
let PORT = 2000;

net.createServer( sock => {

    console.log(`Server connected: ${sock.remoteAddress}:${sock.remotePort}`);

    sock.on('data', data => {
        console.log(`Received message: ${data.toString()}`);
        sock.write(`Echo => ${data}`);
    });

    sock.on('error', e => {
        console.log(`Server error: ${e}`);
    });

    sock.on('close', data => {
        console.log("Server closed");
    });

}).listen(PORT, HOST);
