const http = require('http');

const index = require('./src/index');

const server = http.createServer(index);
server.listen(9000,'0.0.0.0',() => console.log('Started server'));
console.log('Server started');