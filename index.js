/*var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);*/

const { createRuntime } = require('@node-red/runtime');

async function startNodeRED() {
  const runtime = await createRuntime();
  await runtime.start();
  console.log('Node-RED started!');
}

startNodeRED().catch((err) => {
  console.error('Failed to start Node-RED', err);
});