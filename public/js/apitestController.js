/*
    Author : technovators
    File   : app.js
    Details: Application Config for application - 'Console'.
    Email  : technovators.msd@gmail.com
*/
app.controller('apiTestCtrl', function($scope, GlobalService) {
  $scope.getDetails = GlobalService.eventList(function(response) {
    console.log(response["results"]);
    var eventsInfo = response["results"];
    console.log(eventsInfo);
    $scope.eventsInfo = eventsInfo;
  });
});