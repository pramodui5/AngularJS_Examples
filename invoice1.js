(function(angular) {
  'use strict';
angular.module('invoice1', [])
  .controller('InvoiceController', function() {
    this.qty = 1;
    this.cost = 2;

    this.total = function total() {
      return (this.qty * this.cost);
    };
    
    this.pay = function pay() {
      window.alert("Thanks!");
    };
  });
})(window.angular);