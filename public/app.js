'use strict';

angular.module('penguins', [
    'ngRoute',
    'penguins.capture'
])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.otherwise({redirectTo: '/'});
    }]);


//$(function () {
//    // Grab elements, create settings, etc.
//    var canvas = $("#canvas"),
//        context = canvas.get(0).getContext("2d"),
//        video = $("#video").get(0),
//        videoObj = {"video": true},
//        errBack = function (error) {
//            console.log("Video capture error: ", error.code);
//        };
//
//    // Put video listeners into place
//    if (navigator.getUserMedia) { // Standard
//        navigator.getUserMedia(videoObj, function (stream) {
//            video.src = stream;
//            video.play();
//        }, errBack);
//    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
//        navigator.webkitGetUserMedia(videoObj, function (stream) {
//            video.src = window.webkitURL.createObjectURL(stream);
//            video.play();
//        }, errBack);
//    }
//    else if (navigator.mozGetUserMedia) { // Firefox-prefixed
//        navigator.mozGetUserMedia(videoObj, function (stream) {
//            video.src = window.URL.createObjectURL(stream);
//            video.play();
//        }, errBack);
//    }
//
//    $('#snap').on('click',function(){
//        context.drawImage(video, 0, 0, 640, 480);
//    });
//});