'use strict';

describe('Service: userFactoryHttp', function () {

  // load the service's module
  beforeEach(module('itsFrontendApp'));

  // instantiate service
  var userFactoryHttp;
  beforeEach(inject(function (_userFactoryHttp_) {
    userFactoryHttp = _userFactoryHttp_;
  }));

  it('should do something', function () {
    expect(!!userFactoryHttp).toBe(true);
  });

});
