"use strict";
var app = require("./router.module");
var http = require("http");
var hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials/");
//http.createServer(app).listen(process.env.PORT);
http.createServer(app).listen(3001);
