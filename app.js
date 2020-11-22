// ************** //
// Express Server //
// ************** //

var express = require("express");
var cors = require("cors");
var path = require("path");
const http = require("http").Server(app);
const io = require("socket.io")(http);

var app = express();

const ANGULAR_BUNDLE = "dist/Blockchain-Online-Voting-System";

//make angular dist folder available for public
app.use(express.static(path.join(__dirname, ANGULAR_BUNDLE)));
// all the requests should be redirected to angular app
app.use("*", express.static(path.join(__dirname, ANGULAR_BUNDLE)));

module.exports = app;
