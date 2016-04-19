
import page4Controller from './page4Controller';
import 'angular-moment';
require('./page4.scss');

const ngPage4Module = angular.module('page4App', ['angularMoment'])
  .controller('Page4Controller', page4Controller);
export default ngPage4Module;
