'use strict';

/**
 * @ngdoc function
 * @name videoTemplaterFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoTemplaterFrontApp
 */
angular.module('videoTemplaterFrontApp')
    .controller('SubtitlesCtrl', function($scope, srt, FileSaver, Blob, Upload, $timeout, $sce, hotkeys) {

        $scope.srtObj = [];


        $scope.form = {
            start: '1',
            end: '10',
            text: 'test text'
        };


        var createSRT = function(srtFile) {
            return srt.stringify(srtFile);

        };


        $scope.download = function(srtFile) {
            console.log(srtFile);
            srt = createSRT(srtFile);
            var data = new Blob([srt], {
                type: 'srt'
            });
            FileSaver.saveAs(data, 'sub.srt');
        };


        $scope.addLine = function(obj) {

            var id = Object.keys($scope.srtObj).length++;
            $scope.srtObj[id] = { id: id, start: obj.start, end: obj.end, text: obj.text };
            console.log($scope.srtObj);
        };






        // Upload



        // $scope.$watch('files', function() {
        //     $scope.upload($scope.files);
        // });
        // $scope.$watch('file', function() {
        //     if ($scope.file != null) {
        //         $scope.files = [$scope.file];
        //     }
        // });
        // $scope.log = '';

        // $scope.upload = function(files) {
        //     if (files && files.length) {
        //         for (var i = 0; i < files.length; i++) {
        //             var file = files[i];
        //             if (!file.$error) {
        //                 Upload.upload({
        //                     url: 'uploadURL',
        //                     data: {
        //                         username: $scope.username,
        //                         file: file
        //                     }
        //                 }).then(function(resp) {
        //                     $timeout(function() {
        //                         $scope.log = 'file: ' +
        //                             resp.config.data.file.name +
        //                             ', Response: ' + JSON.stringify(resp.data) +
        //                             '\n' + $scope.log;
        //                     });
        //                 }, null, function(evt) {
        //                     var progressPercentage = parseInt(100.0 *
        //                         evt.loaded / evt.total);
        //                     $scope.log = 'progress: ' + progressPercentage +
        //                         '% ' + evt.config.data.file.name + '\n' +
        //                         $scope.log;
        //                 });
        //             }
        //         }
        //     }
        // };







        // Config for videogular

        $scope.videogular = {
            sources: [
                { src: "videos/test.mp4", type: "video/mp4" },
                // { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4" },
                // { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm" },
                // { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg" }
            ],
            // tracks: [{
            //     src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
            //     kind: "subtitles",
            //     srclang: "en",
            //     label: "English",
            //     default: ""
            // }],
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {
                poster: "http://www.videogular.com/assets/images/videogular.png"
            }
        };


        $scope.onPlayerReady = function(API) {
            $scope.API = API;
            console.log($scope.API);
        };




        // Getting time and all



        var getTime = function() {
            return $scope.API.currentTime;
        };


        var setIn = function(t) {
            $scope.form.start = t / 1000.0;
        };



        var setOut = function(t) {
            $scope.form.end = t / 1000.0;
        };



        // Hotkeys

        // You can pass it an object.  This hotkey will not be unbound unless manually removed
        // using the hotkeys.del() method
        hotkeys.add({
            combo: 'ctrl+i',
            description: 'getInTime',
            callback: function() {
                setIn(getTime());
            }
        });

          hotkeys.add({
            combo: 'ctrl+o',
            description: 'getOutTime',
            callback: function() {
                setOut(getTime());
            }
        });



    });
