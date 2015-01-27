'use strict';

var sio = require('socket.io');
var http = require('http');
var play = require('play');
var fs = require('fs');

function Browser(config) {
	//console.log("Browser init !");
	console.log("browser init!");															// TEST CONSOLE LOG
	console.log(config);																			// TEST CONSOLE LOG

	var home = config.homeFolderPath;

	console.log(home);																				// TEST CONSOLE LOG
	fs.exists(home, function(exists) {
		var childs = [];
		var fileExtensions = config.fileExtensions;
		if(exists) {
			//console.log("exists!");
				childs = fs.readdirSync(home);
			//console.log("dir read!");
		}

		childs.forEach(function(child) {

			console.log("Child Element: " + child);								// TEST CONSOLE LOG

			var isMusicFile = false;
			for (var i = fileExtensions.length - 1; i >= 0; i--) {	

				var fileExtension = fileExtensions[i];
				if(child.indexOf(fileExtension) == child.length - fileExtension.length) {
					//TEST PLAYING
					console.log("Child element is music file with extension: " + fileExtension);
					isMusicFile = true;
	  			play.sound(home + "/" + child);
				}
			};
		});
	});
};

(function (config) {
	console.log("program running");
	//var config = require('config.js');
	var config = {}

	config.homeFolderPath = "/Data/Music/";
	config.fileExtensions = ['.mp3', '.wav'];

	var browser = new Browser(config);
})()


