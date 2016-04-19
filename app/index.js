const Angular = require('angular');

require('oclazyload');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('./page3/page3Module')(Angular);
//require('./page4Module')(Angular);
// require('./module5/index')(Angular);

require('style!css!sass!../node_modules/angular-material/angular-material.scss')
require('./styles/main.scss')
const ngModule = Angular.module('myApp', [require('angular-ui-router'), 'oc.lazyLoad', 'page3App', 'ngMaterial']);

require('./config')(ngModule, Angular);

if(ON_DEMO){
  require('./page4/page4.config')(ngModule, Angular);
}
