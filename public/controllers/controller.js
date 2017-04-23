const myApp = angular.module('todolistApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
  console.log("Hello World from controller");

  // the 'contactlist' is the route where we get out data from
  $http.get('/contactlist').then(function(response){
    console.log("I got the data requested.");
    $scope.contactlist = response.data;
  });

  $scope.addContact = function(){
    console.log($scope.contact); // checks that we received data from the input boxes
    // $scope.contact is the data sent to the server
    $http.post('/contactlist', $scope.contact).then(function(response){
      console.log(response);
    });
  };

}]);
