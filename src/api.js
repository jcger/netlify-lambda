const serverless = require("serverless-http");
const express = require("express");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  const site = req.headers.host;
  console.log(site);
  res.cookie("serversidecookie", "yeah", { domain: `.${site}` });
  res.json({ message: "hello world" });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
