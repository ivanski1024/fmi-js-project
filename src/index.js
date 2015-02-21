'use strict'; 

console.log("program running");

var config = {};
config['homeFolderPath'] = "../music";
config['fileExtensions'] = ['.mp3', '.wav'];
config['portNumber'] = 3000;

var browser = require('./browser.js')(config);
var player = require('./player.js')();

var fs = require('fs');
// var sio = require('socket.io');
var bodyParser = require('body-parser');
var server = require('express')();
var os = require('os');

var ifaces = os.networkInterfaces();
// Player = player(config)
var fileStructure = browser.getFileStructure();
console.log(fileStructure);
// console.log(fileStructure);	

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

server.get('/fileStructure', function (req, res) {
	console.log('GET')

	var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  }
  res.json(fileStructure);
});

server.get('/test', function (req, res) {
	console.log('GET');
	var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

	res.sendFile('test2.html', options, function (err) {
		if (err) {
			console.log(err);
			res.status(err.status).end();
		}
		else {
			console.log('test.html served!');
		}
	});
});

server.get('/*.js', function (req, res) {
	console.log(req.url);

	var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

	res.sendFile(req.url, options, function (err) {
		if (err) {
			console.log(err);
			res.status(err.status).end();
		}
		else {
			console.log(req.url + " file served!");
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

server.get('/bobo', function(req, res) {
	var text= "bla bla bla bla bla bla bla bla Bobo blalalba lbalb\ al bla lba Bobo balablblablalblabla Bobo bla bla BO BO BO bla\ el elellalds Bobo"
	var myName="Bobo"
	var hits=[];
	for (var i = 0; i <= text.length; i++) {
		if (text[i] === myName[0]) {
		  for (var s = i; s < (myName.length + i); s++) {
		    if (text[s] === myName[s - i]) {
		          hits.push(text[s]);
		  	}
		  }

		  if(hits.length === myName.length) {
		  	console.log(hits);
		  }
		  hits = [];
		}
	}
});

server.listen(config["portNumber"]);
//console.log('Listening at http://192.168.0.106:' + config.portNumber);

// var os = require('os');
// var ifaces = os.networkInterfaces();

// console.log(ifaces);

// Object.keys(ifaces).forEach(function (ifname) {
//   var alias = 0;

//   ifaces[ifname].forEach(function (iface) {
//     if ('IPv4' !== iface.family || iface.internal !== false) {
//       // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
//       return;
//     }

//     if (alias >= 1) {
//       // this single interface has multiple ipv4 addresses
//       console.log(ifname + ':' + alias, iface.address);
//     } else {
//       // this interface has only one ipv4 adress
//       console.log(ifname, iface.address);
//     }
//   });
// });

// en0 192.168.1.101
// eth0 10.0.0.101