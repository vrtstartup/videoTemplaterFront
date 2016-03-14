'use strict';

/**
 * @ngdoc function
 * @name videoTemplaterFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoTemplaterFrontApp
 */
angular.module('videoTemplaterFrontApp')
    .controller('MainCtrl', function($scope, $http) {

        this.template = 1;
        this.form = '';
        var that = this;

        var resetForm = function() {
            that.form = '';
        };

        this.templates = [{
            id: 1,
            name: 'Titel + 2 tekstblokken'
        }, {
            id: 2,
            name: 'Titel + 3 tekstblokken'
        }, {
            id: 3,
            name: 'Titel + 4 tekstblokken'
        }];



        var options = {
            files: [
                // You can specify up to 100 files.
                { 'url': 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/HT1425/sample_iPod.m4v.zip', 'filename': 'testvideo.m4v' },

                // ...
            ],

            // Success is called once all files have been successfully added to the user's
            // Dropbox, although they may not have synced to the user's devices yet.
            success: function() {
                // Indicate to the user that the files have been saved.
                alert("Success! Files saved to your Dropbox.");
            },

            // Progress is called periodically to update the application on the progress
            // of the user's downloads. The value passed to this callback is a float
            // between 0 and 1. The progress callback is guaranteed to be called at least
            // once with the value 1.
            progress: function(progress) {},

            // Cancel is called if the user presses the Cancel button or closes the Saver.
            cancel: function() {},

            // Error is called in the event of an unexpected response from the server
            // hosting the files, such as not being able to find a file. This callback is
            // also called if there is an error on Dropbox or if the user is over quota.
            error: function(errorMessage) {}
        };
        var button = Dropbox.createSaveButton(options);
        document.getElementById("container").appendChild(button);


        this.sendToDropbox = function() {


            $http({
                method: 'GET',
                url: 'https://www.dropbox.com/1/oauth2/authorize',
                params: {
                    'client_id': '8yl1lr43umhtf6r',
                    'redirect_uri': 'http://localhost:9000',
                    'require_role': 'work',
                    'response_type': 'token'
                }
            }).success(function(response) {
                console.log(response);

            }).error(function(response) {
                console.log(response);
            });

        };


        this.sendToZapier = function(obj) {

            console.log(obj);
            var title;
            var filename;
            var textOne;
            var textTwo;
            var textThree;
            var textFour;
            var template;

            switch (obj.template) {

                case 1:
                    template = 'C:\\Users\\chiafis\\Dropbox (Vrt Startup)\\Vrt Startup Team Folder\\NieuwsHub\\Lab\\01_templater\\win_ae\\Template_Text_02.aep';
                    break;
                case 2:
                    template = 'C:\\Users\\chiafis\\Dropbox (Vrt Startup)\\Vrt Startup Team Folder\\NieuwsHub\\Lab\\01_templater\\win_ae\\Template_Text_03.aep';
                    break;
                case 3:
                    template = 'C:\\Users\\chiafis\\Dropbox (Vrt Startup)\\Vrt Startup Team Folder\\NieuwsHub\\Lab\\01_templater\\win_ae\\Template_Text_04.aep';
                    break;
                default:
                    template = 'C:\\Users\\chiafis\\Dropbox (Vrt Startup)\\Vrt Startup Team Folder\\NieuwsHub\\Lab\\01_templater\\win_ae\\Template_Text_02.aep';
            }




            if (obj.title) {
                title = obj.title.toUpperCase();
            }


            if (obj.filename) {
                filename = obj.filename.toUpperCase();
            }


            if (obj.textOne) {
                textOne = obj.textOne.toUpperCase();
            }


            if (obj.textTwo) {
                textTwo = obj.textTwo.toUpperCase();
            }



            if (obj.textThree) {
                textThree = obj.textThree.toUpperCase();
            }


            if (obj.textFour) {
                textFour = obj.textFour.toUpperCase();
            }




            $http({
                method: 'GET',
                url: 'https://zapier.com/hooks/catch/2mep75/',
                params: {
                    'render-status': 'ready',
                    'target': 'Export Composition',
                    'template': template,
                    'title': title,
                    'filename': filename + '_ae',
                    'textOne': textOne,
                    'textTwo': textTwo,
                    'textThree': textThree,
                    'textFour': textFour
                }
            }).then(function successCallback(response) {
                console.log(response);
                console.log(template);
                resetForm();

            }, function errorCallback(response) {
                console.log(response);
            });


        };

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
