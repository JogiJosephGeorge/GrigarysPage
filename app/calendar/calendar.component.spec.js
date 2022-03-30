'use strict';

describe('calendar', function() {

  // Load the module that contains the `calendar` component before each test
  beforeEach(module('calendar'));

  // Test the controller
  describe('CalendarViewController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('calendar/calendar.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('calendar');
    }));

    it('should create a `calendar` property with 2 calendar fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.calendar).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.calendar).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
