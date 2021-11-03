const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // when there is a "data" event. Conn.on lets you listen to these events.
  // Here we are logging the data sent by the server.
  conn.on("data", (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// Allows other files to call the connect function
module.exports = connect;