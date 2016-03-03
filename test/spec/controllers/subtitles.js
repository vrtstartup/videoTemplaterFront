'use strict';

describe('Controller: SubtitlesCtrl', function () {

  // load the controller's module
  beforeEach(module('videoTemplaterFrontApp'));

  var SubtitlesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubtitlesCtrl = $controller('SubtitlesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SubtitlesCtrl.awesomeThings.length).toBe(3);
  });
});
