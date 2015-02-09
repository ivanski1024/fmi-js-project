var pins = [17, 18, 23];
var url = 'http://192.168.0.200:3000/';


// var http = request('http');
// for (var i = pins.length - 1; i >= 0; i--) {

// 	var uri = url + 'pins/' + pins[i];
// 	request({
// 		uri: uri,
// 		method: "GET"
// 	}, function(error, response, body) { 
// 		console.log(body);
// 	})
// };

var uri = url + 'pins/' + 17;
var form = {value: 0.5};

request({
	uri: uri,
	method: "POST",
	form: { 'value': '0.5'}
}, function(error, response, body) {
	console.log(body);
})
// var options = {
//   host: 'www.nodejitsu.com',
//   path: '/',
//   //since we are listening on a custom port, we need to specify it by hand
//   port: '1337',
//   //This is what changes the request to a POST request
//   method: 'POST'
// };

// callback = function(response) {
//   var str = ''
//   response.on('data', function (chunk) {
//     str += chunk;
//   });

//   response.on('end', function () {
//     console.log(str);
//   });
// }

// var req = http.request(options, callback);
// //This is the data we are posting, it needs to be a string or a buffer
// req.write("hello world!");
// req.end()