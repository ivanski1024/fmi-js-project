'use strict';
var app = angular.module('library', []);

app.controller('libraryCntrl', function ($scope) {
    var result = {  type: 'folder',
                    path: '../music/',
                    'SX - Woo Riddim (Instrumental).mp3': { 
                        type: 'file',
                        extension: '.mp3',
                        path: '../music/SX - Woo Riddim (Instrumental).mp3' 
                    },
                    childArray: [ 'Dnb', 'Maika vi [ Za kukite ].mp3', 'SX - Woo Riddim (Instrumental).mp3' ] 
                };
    $scope.result = [ 'Dnb', 'Maika vi [ Za kukite ].mp3', 'SX - Woo Riddim (Instrumental).mp3' ] ;

    $scope.songClickHandler = function(song) {
            alert(song);
            console.log(song);
        };
});
// var app = angular.module('songs', ['ngResource']);

// app.controller('songsController', function ($scope, Data) {
//     Data.query()
//         .then(function (result) {
//             console.log(result);
//         $scope.bla = result.users;
//     }, function (result) {
//         alert("Error: No data returned");
//     });
// });

// app.$inject = ['$scope', 'Data'];

// app.factory('songs', ['$resource', '$q', function ($resource, $q) {
// //Actually we can use $resource
// var data = $resource('localhost/shfofx/PHP/Rest/alertLossDetails.php', 
//       {},
//      { query: {method:'GET', params:{}}}
//               );
//     var factory = {
//         query: function (selectedSubject) {
//             var deferred = $q.defer();          
//             deferred.resolve(songs);           
//             return deferred.promise;
//         }
//     }
//     return factory;
// }]);