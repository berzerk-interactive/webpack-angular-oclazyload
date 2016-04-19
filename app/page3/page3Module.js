import page3Controller from './page3Controller';

const ngPage3Module = angular.module('page3App', [])
    .controller('Page3Controller', page3Controller);
    require('./page3.scss');

export default ngPage3Module;
