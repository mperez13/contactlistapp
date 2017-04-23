const myApp = angular.module('todolistApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
  console.log("Hello World from controller");

  $http.get('/contactlist')

  person1 = {
    name: 'Tim',
    email: 'tim@email.com',
    number: '(111) 111-1111'
  };
  person2 = {
    name: 'Jane',
    email: 'jane@email.com',
    number: '(222) 222-2222'
  };
  person2 = {
    name: 'John',
    email: 'john@email.com',
    number: '(333) 333-3333'
  };

  const contactlist = [person1, person2, person3];
  $scope.contactlist = contactlist;
}]);
