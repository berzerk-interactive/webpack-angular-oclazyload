let config = function ($stateProvider, $locationProvider, $urlRouterProvider) {
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
    };




export default config;
