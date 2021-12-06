const udp = require('dgram');

const PORT = 2000;
let server = udp.createSocket('udp4');

server.on('message', (msg, info) => {
    console.log(`Received message: ${msg.toString()}`);
    server.send(msg, info.port, info.address, (err) => {
        if (err) server.close();
    });
})
    .on('listening', () => {
        console.log(`Server PORT: ${server.address().port}`);
        console.log(`Server Address: ${server.address().address}`);
    })
    .on('close', () => console.log('Server closed'))
    .on('error', (err) => {
        console.log('Error: ' + err);
        server.close();
    });

server.bind(PORT);
