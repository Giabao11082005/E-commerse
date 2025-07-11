const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

//countConnect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connection:: ${numConnection}`);
};

//check overload Connect
const checkOverLoadConnection = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    //example maximum number of connections based on number osf cores
    const maxConnections = numCores * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log("Connection overload detected");
      //notify.send(..........)
    }
  }, _SECONDS); //monitor 5 seconds
};

module.exports = {
  countConnect,
  checkOverLoadConnection,
};
