var http_port = process.argv[2] || 8081,
    http = require('http'),
    io = require('socket.io'),
    fs = require('fs');

var server = http.createServer(function (req, res) {

    fs.readFile('tilt-compiled.html', 'utf8', function(err, data) {
        if (err) return;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data, "utf8");
    });

}).listen(http_port);

socket = io.listen(server);

socket.sockets.on('connection', function(client) {
    console.log('made a websocket connection!');

    client.on('accelerator', function(data) {
        console.log(data);
    });
});
