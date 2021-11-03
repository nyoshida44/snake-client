// Require the connect function from client.js
const connect = require("./client.js");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  process.stdout.write('.');
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
connect();
setupInput();