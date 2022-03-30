'use strict';

describe('Calendar', function() {
  var $httpBackend;
  var Calendar;
  var calendarData = [
    {name: 'Calendar X'},
    {name: 'Calendar Y'},
    {name: 'Calendar Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Calendar` service before each test
  beforeEach(module('core.calendar'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Calendar_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('calendar/calendar.json').respond(calendarData);

    Calendar = _Calendar_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the calendar data from `/calendar/calendar.json`', function() {
    var cal = Calendar.query();

    expect(cal).toEqual([]);

    $httpBackend.flush();
    expect(cal).toEqual(calendarData);
  });

});
