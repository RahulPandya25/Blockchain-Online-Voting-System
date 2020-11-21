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

function onConnection(socket) {
  console.log("new user connected");
  // socket.on("paint", (data) => socket.broadcast.emit("paint", data));
  // socket.on("mark", (data) => socket.broadcast.emit("mark", data));
  // socket.on("broadcast", broadcast);
  // function broadcast(data) {
  //   if (data.type === "NEW CONNECTION") {
  //     if (!userService.getUserList().includes(data.user)) {
  //       userService.addUser(data.user);
  //       socket.broadcast.emit("new connection", data);
  //       socket.emit("okay login", userService.getUserList());
  //     } else socket.emit("username exists");
  //   } else if (data.type === "USER DISCONNECTED") {
  //     //  remove user from user list
  //     userService.removeUser(data.user);
  //     // broadcast others
  //     socket.broadcast.emit("user disconnected", data);
  //   }
  // }
}

io.on("connection", onConnection);

module.exports = app;
