export default (ngModule, Angular) => {
    ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('/page1');

        $stateProvider.state('page1', {
            url: '/page1',
            template: require('./page1.html'),
            controller: function () {
                this.title = 'This is page 1';
            },
            controllerAs: 'test'
        }).state('page2', {
            url: '/page2',
            template: require('./page2.html'),
            controller: function () {
                this.title = 'This is page 2';
            },
            controllerAs: 'test'
        }).state('page3', {
            url: '/page3',
            template: require('./page3/page3.html'),
            controller: 'Page3Controller',
            controllerAs: 'test'
        });
    }])
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
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
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });
        if(ON_DEMO){
            ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
                $stateProvider.state('page4', {
                    url: '/page4',
                    templateProvider: ['$q', function ($q) {
                        let deferred = $q.defer();
                        require.ensure(['./page4/page4.html'], function () {
                            let template = require('./page4/page4.html');
                            deferred.resolve(template);
                        });
                        return deferred.promise;
                    }],
                    controller: 'Page4Controller',
                    controllerAs: 'test',
                    resolve: {
                        foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                            let deferred = $q.defer();
                            require.ensure([], function () {
                                let module = require('./page4/page4Module.js')(Angular);
                                $ocLazyLoad.load({
                                    name: 'page4App'
                                });
                                deferred.resolve(module);
                            });

                            return deferred.promise;
                        }]
                    }
                });
            }]);

        }


}
