var express = require('express');
require('http');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/version', function(request, response) {
    response.send(request.httpVersion);
});

app.get('/headers', function(request, response) {
    response.send(request.headers);
});

app.get('/headers/:header_name', function(request, response) {
    response.send(request.headers[request.params.header_name]);
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});

// Removed for exporting project as a module.
// app.listen(process.env.PORT || 8080, process.env.IP);

module.exports= app;
