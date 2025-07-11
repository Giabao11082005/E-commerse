const express = require("express");
const app = express();

const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

//init middleware
app.use(morgan("dev"));
// app.use(morgan("combined"));
// app.use(morgan("common"));
// app.use(morgan("short"));
// app.use(morgan("tiny"));
app.use(helmet()); //log request
app.use(compression()); //performance reduction

//init db
require("./databases/init.mongodb.js");
const { checkOverLoadConnection } = require("./helpers/check.connect");
checkOverLoadConnection();
//init routes
app.get("/", (req, res) => {
  const strCompression = "Hello Node.js";
  return res.status(200).json({
    message: "Welcome Hoang Gia Bao",
    metadata: strCompression.repeat(10000),
  });
});

//handle error

module.exports = app;
