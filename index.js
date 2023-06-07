/*var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);*/

const http = require('http');
const { createRuntime } = require('@node-red/runtime');

async function startNodeRED() {
  const runtime = await createRuntime();
  await runtime.start();
  console.log('Node-RED started!');
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/admin') {
    res.writeHead(302, {
      'Location': 'http://localhost:1880',
    });
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(80, 'localhost', () => {
  console.log('Node-RED server is running on port 80!');
  startNodeRED().catch((err) => {
    console.error('Failed to start Node-RED', err);
  });
});