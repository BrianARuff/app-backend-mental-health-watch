require("dotenv").config();

const express = require("express");
const server = express();

/* CORS */
const cors = require("cors");
server.options("*", cors());

server.use(cors());

// middleware
const parseMiddleWare = require("./middleWare/middleware.js");
parseMiddleWare(server);

// Home Page of API
server.get("/", (req, res) => {
  res.send("<h1>It works</h1>");
});

server.listen(process.env.PORT, () => {
  const consoleMessage = `Server running on port ${process.env.PORT}`;
  process.stdout.write("---" + consoleMessage + "---\n");
});
