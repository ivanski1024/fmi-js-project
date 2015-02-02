'use strict'; 

console.log("program running");

var config = {};
config['homeFolderPath'] = "/Data/Music";
config['fileExtensions'] = ['.mp3', '.wav'];
config['portNumber'] = 3000;

var browser = require('./browser.js')(config);
var player = require('./player.js');

var fs = require('fs');
var sio = require('socket.io');
var bodyParser = require('body-parser');

var server = require('express')();


//Player = player(config)
var fileStructure = browser.getFileStructure();
console.log(fileStructure);	

server.use(bodyParser.urlencoded({
  extended: true
}));

server.get('/', function (req, res) {
	console.log('GET')

	var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

	res.sendFile('client.html', options, function(err) {
		if (err) {
			console.log(err);
			res.status(err.status).end();
		}
		else {
			console.log('Client opened!');
		}
	});
});

server.post('/action', function (req, res) {

	// console.log(req);
	console.log(req.body);	
	var action = req.body['action'];
	// console.log('pressed: ' + action);
	// var action = "";
	console.log(action);
	switch(action) {
		case 'play':
			console.log('PLAY!');
			player.play();
			break;
		case 'pause':
			console.log('PAUSE!');
			player.pause();
			break;
		case 'stop':
			console.log('STOP!');
			player.stop();
			break;
		case 'prev':
			console.log('PREV!');
			player.prev();
			break;
		case 'next':
			console.log('NEXT!');
			player.next();
			break;
		// default:
		// 	throw new Error('Action : ' + action + ' unknown!')
	}
});

server.listen(config.portNumber);

console.log('Listening at http://192.168.0.106:' + config.portNumber);