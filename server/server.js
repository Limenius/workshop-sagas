var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var randomName = require("../src/utils/nameGen");

io.on("connection", function(socket) {
  setInterval(
    () => socket.emit("message", { type: "create", name: randomName() }),
    1000
  );
});

http.listen(3001, function() {
  console.log("listening on *:3001");
});
