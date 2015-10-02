'use strict';

describe('Service: workItemService', function () {

  // load the service's module
  beforeEach(module('itsFrontendApp'));

  // instantiate service
  var workItemService;
  beforeEach(inject(function (_workItemService_) {
    workItemService = _workItemService_;
  }));

  it('should do something', function () {
    expect(!!workItemService).toBe(true);
  });

});
