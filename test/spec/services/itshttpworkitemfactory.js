'use strict';

describe('Service: itsHttpWorkItemFactory', function () {

  // load the service's module
  beforeEach(module('itsFrontendApp'));

  // instantiate service
  var itsHttpWorkItemFactory;
  beforeEach(inject(function (_itsHttpWorkItemFactory_) {
    itsHttpWorkItemFactory = _itsHttpWorkItemFactory_;
  }));

  it('should do something', function () {
    expect(!!itsHttpWorkItemFactory).toBe(true);
  });

});
