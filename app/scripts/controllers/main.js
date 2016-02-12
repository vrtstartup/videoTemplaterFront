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


        this.form = '';
        var that = this;

        var resetForm = function() {
            that.form = '';
        };

        this.templates = [{
            name: 'template1'
        }, {
            name: 'template2'
        }, {
            name: 'template3'
        }];




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

            var title;
            var filename;
            var textOne;
            var textTwo;
            var textThree;
            var textFour;


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
                    'title': title,
                    'filename': filename,
                    'textOne': textOne,
                    'textTwo': textTwo,
                    'textThree': textThree,
                    'textFour': textFour
                }
            }).then(function successCallback(response) {
                console.log(response);
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
