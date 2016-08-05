let page4Controller = function(){
    let vm = this;
    vm.title = 'This is page 4';
    vm.today = new Date();
    vm.pets = [
        {name: 'Ellie'},
        {name: 'Mr. Fish'},
        {name: 'Stella'},
        {name: 'Stuby'}
    ];
};


export default page4Controller ;
