const serverless = require("serverless-http");
const express = require("express");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.cookie("serversidecookie", "yeah");
  res.json({ message: "hello world" });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
