module.exports = function() {
	
	var config;
	var resources;

	var Player = function (conf) {
		console.log("Player.init()");
		config = conf;
	};

	Player.prototype.play = function () {
		console.log('Action pressed: Player.play();')
	};

	Player.prototype.pause = function () {
		console.log('Action pressed: Player.pause();')
	};
	Player.prototype.stop = function () {
		console.log('Action pressed: Player.stop();')
	};
	Player.prototype.prev = function () {
		console.log('Action pressed: Player.prev();')
	};
	Player.prototype.next = function () {
		console.log('Action pressed: Player.next();')
	};

	return new Player({});
}