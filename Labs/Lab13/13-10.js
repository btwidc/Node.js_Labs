const udp = require('dgram');
const PORT = 2000;

let client = udp.createSocket('udp4');

client.on('message', (msg) => {
    console.log(`Received message from server: ${msg.toString()}`);
}).on('error', (err) => {
        console.log('Error: ' + err);
        client.close();
    });

client.send('Hello from Client', PORT, 'localhost', (err) => {
    if (err) client.close();
    else console.log('Message sent');
});
