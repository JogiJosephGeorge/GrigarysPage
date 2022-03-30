'use strict';

// Register `phoneListShort` component, along with its associated controller and template
angular.
  module('phoneListShort').
  component('phoneListShort', {
    templateUrl: 'phone-list-short/phone-list-short.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
