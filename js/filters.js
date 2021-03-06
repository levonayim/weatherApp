angular.module('ionic.weather.filters', ['ionic.weather.services'])

.filter('temp', function(Settings) {
  return function(input) {
    if(Settings.getTempUnits() == 'c') {
      return input.celsius;
    }
    return input.fahrenheit;
  };
})

// Silly Wunderground uses a different name for f/c in the hourly forecast
.filter('tempEnglish', function(Settings) {
  return function(input) {
    if(Settings.getTempUnits() == 'c') {
      return input.english;
    }
    return input.metric;
  };
})

.filter('tempInt', function() {
  return function(input) {
    return parseInt(input);
  }
});
