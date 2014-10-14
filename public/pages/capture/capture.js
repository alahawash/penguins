'use strict';

angular.module('penguins.capture', ['ngRoute', 'webcam'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            'templateUrl': 'pages/capture/capture.html',
            'controller': 'CaptureCtrl'
        });
    }])
    .controller('CaptureCtrl', ['$scope', '$http', function ($scope, $http) {
        var _video = null, stage, layer,
            penguinsData, penguinImages = [];

        penguinsData = [
            {
                url: 'img/p1.png',
                x: 10,
                y: 200,
                width: 93,
                height: 150
            },
            {
                url: 'img/p2.png',
                x: 70,
                y: 170,
                width: 93,
                height: 180
            },
            {
                url: 'img/p3.png',
                x: 330,
                y: 170,
                width: 93,
                height: 180
            },
            {
                url: 'img/p4.png',
                x: 380,
                y: 200,
                width: 93,
                height: 150
            }
        ];

        penguinsData.forEach(function (penguin, index, arr) {
            var imageObj = new Image();
            imageObj.onload = function () {
                var penguinImg = new Kinetic.Image({
                    image: imageObj,
                    x: penguin.x,
                    y: penguin.y,
                    width: penguin.width,
                    height: penguin.height,
                    draggable: true
                });

                // add cursor styling
                penguinImg.on('mouseover', function () {
                    document.body.style.cursor = 'pointer';
                });
                penguinImg.on('mouseout', function () {
                    document.body.style.cursor = 'default';
                });
                penguinImages.push(penguinImg);
            };
            imageObj.src = penguin.url;
        });

        $scope.captureMode = true;
        $scope.patOpts = {x: 0, y: 0, w: 480, h: 480};

        $scope.webcamError = false;
        $scope.onError = function (err) {
            $scope.$apply(
                function () {
                    $scope.webcamError = err;
                }
            );
        };

        $scope.onSuccess = function () {
            // The video element contains the captured camera data
            _video = document.querySelector('video');
            ;
            $scope.$apply(function () {
                $scope.patOpts.w = _video.width;
                $scope.patOpts.h = _video.height;
            });
        };

        $scope.onStream = function (stream, videoElem) {
            // You could do something manually with the stream.
        };


        /**
         * Make a snapshot of the camera data and show it in another canvas.
         */
        $scope.makeSnapshot = function makeSnapshot() {
            if (_video) {
                stage = new Kinetic.Stage({
                    container: "snapshot",
                    width: _video.width,
                    height: _video.height
                });
                layer = new Kinetic.Layer();

                var idata = getVideoData();

                var snapShotImgObj = new Image();
                snapShotImgObj.src = idata;

                var snapshotImg = new Kinetic.Image({
                    image: snapShotImgObj,
                    x: 0,
                    y: 0,
                    width: _video.width,
                    height: _video.height
                });

                layer.add(snapshotImg);

                penguinImages.forEach(function (image) {
                    layer.add(image);
                })
                stage.add(layer);

                $scope.captureMode = false;
            }
        };

        $scope.retake = function () {
            $scope.email = '';
            $scope.shared = false;
            $scope.captureMode = true;
        }

        /**
         * Redirect the browser to the URL given.
         * Used to download the image by passing a dataURL string
         */
        $scope.downloadSnapshot = function downloadSnapshot() {
            stage.toDataURL({
                callback: function (dataUrl) {
                    window.location.href = dataUrl;
                },
                mimeType: 'image/png'
            });
        };

        $scope.share = function () {
            stage.toDataURL({
                callback: function (dataUrl) {
                    $http.post('/save', {data: dataUrl, email: $scope.email});
                    $scope.shared = true;
                },
                mimeType: 'image/png'
            });
        };

        var getVideoData = function getVideoData() {
            var hiddenCanvas = document.createElement('canvas');
            hiddenCanvas.width = _video.width;
            hiddenCanvas.height = _video.height;
            var ctx = hiddenCanvas.getContext('2d');
            ctx.drawImage(_video, 0, 0, _video.width, _video.height);
            return hiddenCanvas.toDataURL('image/png');
        };


    }]);