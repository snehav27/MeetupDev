/*
    Author : technovators
    File   : app.js
    Details: Application Config for application - 'Console'.
    Email  : technovators.msd@gmail.com
*/
app.controller('homeCtrl', function($scope, $http) {
  $scope.dataFromController = "This is from home controller";
  var url = "https://api.meetup.com/2/open_events?zip=02108&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=20&radius=25.0&desc=False&status=upcoming&sig_id=194446457&sig=a2cffc612684e47432cd085d9902fe8cd3ec6ae3&callback=JSON_CALLBACK";
  $scope.getEventDetails =
    function() {
      $http.jsonp(url)
        .success(function(response) {
          console.log(response["results"]);
          var eventsList = response["results"];
          console.log(eventsList[0].name);
          $scope.eventsList = eventsList;
        })
        .error(function() {
          console.log('error');
        });
    };
});