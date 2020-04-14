const app = require("./router.module");

const http = require("http");

const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials/");

//http.createServer(app).listen(process.env.PORT);

http.createServer(app).listen(3001);
