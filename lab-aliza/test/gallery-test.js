'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../app/components/gallery')(testApp);

describe('gallery component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.scope.images = require('./data/album-1.js');
  }));

  it('should list images', function() {
  });

});
