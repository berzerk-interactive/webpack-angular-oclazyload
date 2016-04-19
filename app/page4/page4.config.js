export default (ngModule, Angular) => {

  ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
      $stateProvider.state('page4', {
          url: '/page4',
          templateProvider: ['$q', function ($q) {
              let deferred = $q.defer();
              require.ensure(['./page4.html'], function () {
                  let template = require('./page4.html');
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
                      let module = require('./page4Module.js')(Angular);
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
