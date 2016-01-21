export default Angular => {
    const ngPage4Module = Angular.module('page4App', ['angularMoment']);
    require('angular-moment');
    require('./page4.scss');
    require('./page4Controller')(ngPage4Module);
}
