angular.module('TestApp',[]);
angular.module('TestApp')
    .controller('MainController',ctrlFunc);


function ctrlFunc(){

    this.people =clientPeople;
    this.god = clientGod; 
    this.godFromServer = clientGodFromServer;

    var testArr=['a','b','x'];
    var testArr2=["Saab", "Volvo", "BMW"];
}