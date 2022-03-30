'use strict';

// Register `calendar` component, along with its associated controller and template
angular.
  module('calendar').
  component('calendar', {
    templateUrl: 'calendar/calendar.template.html',
    controller: ['CalendarView',
      function CalendarViewController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
