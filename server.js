"use strict";

var express = require("express");
// var favicon = require('serve-favicon');
var path = require("path");

var server = express();

var PORT = process.env.PORT || 3000;

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

server.set("port", PORT);

// Routes
// server.use(favicon(path.join(__dirname, "..", "build", "favicon.ico")));
server.use("/", express.static(path.join(__dirname, "public")));
// server.get(["/", "/results$", "/questions$", "/about$"], function (req, res) {
//     res.render("home", {
//         data: JSON.stringify(data.values)
//     });
// });

// 404 handler
server.use(function(req, res, next) {
    var err = new Error("The site configured at this address does not contain the requested file");
    err.status = 404;
    next(err);
});

// Error handler
server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        title: err.status == 404 ? "File Not Found" : "Internal Server Error",
        message: err.message,
        status: err.status
    });
});

// Start server listening
server.listen(PORT, function() {
    console.log("Express server listening on port " + PORT);
});
