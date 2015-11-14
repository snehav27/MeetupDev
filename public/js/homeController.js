/*
    Author : technovators
    File   : app.js
    Details: Application Config for application - 'Console'.
    Email  : technovators.msd@gmail.com
*/
app.controller('homeCtrl', function(GlobalService, $scope, $http) {
  $scope.dataFromController = "This is from home controller";
  GlobalService.eventList(function (response) {
      console.log(response.results);
      $scope.eventList = response.results;
  });

  $scope.getEventDetails =
   function () {
       GlobalService.getEventByZipCode($scope.zipcode, function (response) {
           $scope.eventList = response.results;
           console.log($scope.zipcode);
           console.log(response.results);
       })

   };

  $scope.getCategories =
      function () {
          GlobalService.getCategories(function (response) {
              $scope.categoryList = response.results;
              
          });
         
      };

  $scope.getEventByTopic = function (topic) {
      GlobalService.getEventByTopic($scope.zipcode, topic, function (response) {
          $scope.eventList = response.results;
          console.log(response);
      })
  }
  }
);

app.controller('partialCtrl', function (GlobalService, $scope, $http) {
    
});
