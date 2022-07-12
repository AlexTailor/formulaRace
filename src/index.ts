import express from "express";
import axios from "axios";
import path from "path";
require("dotenv").config();
import drivers from "./static/drivers.json";
import { Utils } from "./util/Utils";
import { DriverService } from "./services/DriverService";
import { DriverController } from "./controllers/DriverController";

const app = express();

const PORT = process.env.PORT || 5000;

const utils = new Utils();

const driverService = new DriverService(axios, drivers, utils);

const driverController = new DriverController(express.Router(), driverService);

app.use("/api/drivers", driverController.getRouterConf());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use("/static", express.static("src/static"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
