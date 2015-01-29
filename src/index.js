'use strict';

var sio = require('socket.io');
var http = require('http');
var play = require('play');
var fs = require('fs');

var Browser = require('./browser.js');

(function (config) {
	console.log("program running");
	//var config = require('config.js');
	var config = {}

	config.homeFolderPath = "/Data/Music/";
	config.fileExtensions = ['.mp3', '.wav'];

	var browser = new Browser(config);
})()
