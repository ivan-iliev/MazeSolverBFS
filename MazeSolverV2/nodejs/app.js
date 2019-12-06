var express = require('express');
var app     = express();
var server  = require('http').createServer(app);

server.listen(process.env.PORT || 3000);

app.use(express.static('public')); // enables the use of all files statically

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'public/index.html')
});
