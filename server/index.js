// express server set up
const express = require("express");
const router = require('./routes');

// socket.io set up
const socket = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = express()
  .use(router)
  .listen(PORT, () => console.log(`DashChat listening on port ${PORT}`));

// socket set up
let io = socket(server);

io.on('connection', (socket) => {
  console.log('A new user has connected to the socket..');
  // console.log(socket);

  // request and return tweets line
  socket.on('disconnect', (data) => {
    console.log('A user has disconnected..');

    io.sockets.emit('', data);
  });
});

module.exports = server;
