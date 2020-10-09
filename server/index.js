const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.cookie("serversidecookie", "yeah");
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ hello: "world" }));
});

module.exports = app;
module.exports.handler = serverless(app);
