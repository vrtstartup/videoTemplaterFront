'use strict';

describe('Service: srt', function () {

  // load the service's module
  beforeEach(module('videoTemplaterFrontApp'));

  // instantiate service
  var srt;
  beforeEach(inject(function (_srt_) {
    srt = _srt_;
  }));

  it('should do something', function () {
    expect(!!srt).toBe(true);
  });

});
