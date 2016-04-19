import 'angular';
import 'oclazyload';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import './page3/page3Module';

require('style!css!sass!../node_modules/angular-material/angular-material.scss')
require('./styles/main.scss')


import config from './config';

angular.module('myApp', [require('angular-ui-router'), 'oc.lazyLoad', 'page3App', 'ngMaterial'])
    .config(config)
    .controller('AppCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', function ($scope, $timeout, $mdSidenav, $log) {
      $scope.toggleLeft = buildDelayedToggler('left');
      $scope.toggleRight = buildToggler('right');
      $scope.isOpenRight = function(){
        return $mdSidenav('right').isOpen();
      };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
    }])
    .controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
    }])
    .controller('RightCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
    }]);


if(ON_DEMO){
  angular.module('myApp').config(
    require('./page4/page4.config').default
  );
}
