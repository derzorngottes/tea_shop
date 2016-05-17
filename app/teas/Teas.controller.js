(function() {
  'use strict';

  angular
    .module('teashopApp')
    .controller('Teas', Teas);

  Teas.$inject = ['TeaService'];

  function Teas(TeaService) {
    var vm = this;

    // vm.cats = [
    //   { '1': 'indian'},
    //   { '2': 'japanese'},
    //   { '3': 'chinese'},
    //   { '4': 'green'},
    //   { '5': 'black'},
    //   { '6': 'white'},
    //   { '7': 'rooibos'}
    // ];

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
