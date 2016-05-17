(function() {
  'use strict';

  angular
    .module('teashopApp')
    .controller('Teas', Teas);

  Teas.$inject = ['TeaService'];

  function Teas(TeaService) {
    var vm = this;

    vm.teaCats = [
      'indian',
      'japanese',
      'chinese',
      'green',
      'black',
      'white',
      'rooibos'
    ];

    TeaService.getTeas().then(function(teas) {
      vm.teas = teas.data;
    })
    .catch(function(err) {
      vm.errors = err;
    });
  }
})();
