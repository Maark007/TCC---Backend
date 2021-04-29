const express = require("express");
const routes = require('./router/routes');
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

require("dotenv").config();
require("./database/database");

server.listen(process.env.PORT || 3333, () => {
  console.log("Server ON ;)");
});
