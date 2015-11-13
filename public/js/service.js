/*
    Author : technovators
    File   : service.js
    Details: REST Service for application - 'Console'.
    Email  : technovators.msd@gmail.com
*/
app.factory("GlobalService", function GlobalService($http) {
  /* Constant(s) */
    var meetupAPIKey = '592e295a15261d41135449444e64d1';

  /* Search eventList using Meetup API */
  var eventList = function(callback) {
    $http.jsonp("https://api.meetup.com/2/open_events?zip=02108&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=20&radius=25.0&desc=False&status=upcoming&sig_id=194446457&sig=a2cffc612684e47432cd085d9902fe8cd3ec6ae3&callback=JSON_CALLBACK")
      .success(callback);
  };

  var getEventByZipCode = function (zipcode, callback) {
      $http.jsonp('https://api.meetup.com/2/open_events?zip=' + zipcode + '&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=20&radius=2.0&desc=False&status=upcoming&key=' + meetupAPIKey + '&callback=JSON_CALLBACK')
        .success(callback)
  };

  var getCategories = function (callback) {
      $http.jsonp('https://api.meetup.com/topics?offset=0&format=json&photo-host=public&page=20&order=members&sig_id=195469623&key=' + meetupAPIKey + '&callback=JSON_CALLBACK')
          .success(callback)
  };

  var getEventByTopic = function (zipcode, topic, callback) {
      $http.jsonp('https://api.meetup.com/2/open_events?zip=' + zipcode + '&and_text=False&offset=0&format=json&limited_events=False&topic=' + topic + '&photo-host=public&page=20&radius=25.0&desc=False&status=upcoming&key=' + meetupAPIKey + '&callback=JSON_CALLBACK')
      .success(callback)
  };

  return {
      eventList: eventList,
      getEventByZipCode: getEventByZipCode,
      getCategories: getCategories,
      getEventByTopic: getEventByTopic
  };
});

/* End of service.js */