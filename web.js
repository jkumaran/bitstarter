#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");
var content;
fs.readFile('./index.html',function read(err,data) {
   if (err) {
      throw err;
   }
   content = data.toString();

//console.log("content is " + content);

   app.get('/', function(request, response) {
     response.send(content);
//     response.send('Hello');
   });

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
