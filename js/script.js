/*Creacion de Función que Llevará Music*/
(function(){
    'use strict';
    var app=angular.module("appMusic",[]);
    /* Imagenes del JSON*/
	app.filter("soloUrl", function(){
	return function(item){
		return (JSON.stringify(item)).slice(10,-18);
		};
	});
    app.controller("musicController",function($scope, $http){
        $http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=06dcac510f13bd9f9e4beb4c7b0bdb60&format=json").success(function(response) {$scope.musics = response.tracks.track;});
    });
})();