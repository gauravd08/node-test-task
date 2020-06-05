import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import mongoose = require("mongoose");

import config from "config";

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3001 } = process.env;
const server = http.createServer(router);


mongoose
  .connect(
    `mongodb+srv://${config.get("MONGO_CRED.MONGO_USER")}:${config.get(
      "MONGO_CRED.MONGO_PASSWORD"
    )}${config.get("MONGO_CRED.MONGO_PATH")}`
  )
  .then(() => {
    server.listen(PORT);
    console.log(`Server is running http://localhost:${PORT}...`);
  })
  .catch((err) => {
    console.log("inside error block");
    console.log(err);
  });
