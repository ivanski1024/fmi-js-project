'use strict';
var app = angular.module('myModule', []);

app.controller('fessCntrl', function ($scope) {
	$scope.users = 	[ {firstname: 'Konstantin'},
								 		{firstname: 'Vaki'}, 
								 		{firstname: 'tantin'}, 
								 		{firstname: 'firstnamzzzzzzKonstantin'}
								 		];
});

// var TestResource = $resource('localhost/shfofx/PHP/Rest/alertLossDetails.php', 
//       {},
//      { query: {method:'GET', params:{}}}
//               );