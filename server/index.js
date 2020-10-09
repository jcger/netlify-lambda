const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.cookie("serversidecookie", "yeah");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});

module.exports = app;
module.exports.handler = serverless(app);
