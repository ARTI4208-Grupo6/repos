// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('http');
var kafka = require('kafka-node')
// Port where we'll run the websocket server
var webSocketsServerPort = 1337;
var kafkahost = '127.0.0.1';
var kafkaport = 9092;
var kafkatopic = 'testk';
var kafkapartition = 0;
var connection;
var socket = new webSocketServer({
    httpServer: http.createServer().listen(webSocketsServerPort)
});

var Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(
        client,
        [
            { topic: kafkatopic, partition: kafkapartition }
        ],
        {
            autoCommit: false
        }
    );

socket.on('request', function(request) {
    connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
        console.log(message.utf8Data);
        connection.sendUTF('hello');
        setTimeout(function() {
        }, 1000);
    });

    connection.on('close', function(connection) {
        console.log('connection closed');
    });

    consumer.on('message', function (message) {
      console.log("message received ***** " + JSON.stringify( message ) );
      connection.sendUTF(JSON.stringify( message ));
      });
});
