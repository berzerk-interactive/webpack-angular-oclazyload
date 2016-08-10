// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./spec/*.spec.js'],
  suites: {

      smoke: [
      './home.e2e.spec.js',
      'e2e/smoke/home.spec.js',
      'e2e/smoke/arrivals.spec.js',
      'e2e/smoke/redeemed.spec.js',
      'e2e/smoke/exceptions.spec.js',
      'e2e/smoke/payables.spec.js',
      'e2e/smoke/receivables.spec.js',
      'e2e/smoke/chart.spec.js',
      'e2e/smoke/reseller.spec.js',
      'e2e/smoke/team.spec.js',
      'e2e/smoke/products.spec.js'
    ],
      full: 'spec/*.js'
  },
  params: {
      user1: {
        identity: 'test2@test2.com',
        password: 'Testing2!',
        fn:'test2',
        ln: 'test2'
      },
      sleep: 1000,
      baseUrl: 'http://localhost:8080/'
    },
  onPrepare: function() {
    var width = 800;
    var height = 960;
    browser.driver.manage().window().setSize(width, height);
},

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
