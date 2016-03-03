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
                    template = '/Users/bresciapc/Dropbox (Vrt Startup)/Vrt Startup Team Folder/NieuwsHub/Lab/01_templater/Template_Text_02.aep';
                    break;
                case 2:
                    template = '/Users/bresciapc/Dropbox (Vrt Startup)/Vrt Startup Team Folder/NieuwsHub/Lab/01_templater/Template_Text_03.aep';
                    break;
                case 3:
                    template = '/Users/bresciapc/Dropbox (Vrt Startup)/Vrt Startup Team Folder/NieuwsHub/Lab/01_templater/Template_Text_04.aep';
                    break;
                default:
                    template = '/Users/bresciapc/Dropbox (Vrt Startup)/Vrt Startup Team Folder/NieuwsHub/Lab/01_templater/Template_Text_02.aep';
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
