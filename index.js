const express = require("express");
const app = express();

app.use(express.static(__dirname + "/resurrection"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/404.html")
});

app.listen(8080);
