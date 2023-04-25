const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('client/build'));

const logsFilePath = 'logs.txt';
let logs = fs.readFileSync(logsFilePath, 'utf-8');

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send(logs);

  fs.watchFile(logsFilePath, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
      logs = fs.readFileSync(logsFilePath, 'utf-8');
      ws.send(logs);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
