/**************************************** */
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
/**************************************** */
const HttpError = require("./util/http-error");
/**************************************** */
const app = express();
/**************************************** */
app.use(cors());
app.use(bodyParser.json());
/**************************************** */
/**************** Routes **************** */
/**************************************** */
app.use("/api/qr", require("./routes/qr-routes"));
/**************************************** */
/**************************************** */
app.use((req, res, next) => {
  console.log("Could not find this route");
  const error = new HttpError("Invalid Link, Could not find this route!", 404);
  throw error;
});
/**************************************** */
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({
    message: error.message || "An unknown error occurred!",
  });
});
/**************************************** */
app.listen(5000, () => {
  if (!process.env.PORT) console.clear();
  console.log("Server is up port " + (process.env.PORT || 5000));
});
/**************************************** */
