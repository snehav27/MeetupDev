/*
    Author : technovators
    File   : service.js
    Details: REST Service for application - 'Console'.
    Email  : technovators.msd@gmail.com
*/
app.factory("GlobalService", function GlobalService($http) {
  /* Constant(s) */
  var meetupAPIKey = "a2cffc612684e47432cd085d9902fe8cd3ec6ae3";

  /* Search eventList using Meetup API */
  var eventList = function(callback) {
    $http.jsonp("https://api.meetup.com/2/open_events?zip=02108&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=20&radius=25.0&desc=False&status=upcoming&sig_id=194446457&sig=a2cffc612684e47432cd085d9902fe8cd3ec6ae3&callback=JSON_CALLBACK")
      .success(callback);
  };

  return {
    eventList: eventList
  };
});

/* End of service.js */