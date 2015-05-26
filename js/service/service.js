var app= angular.module('app');

app.service("AppService", [ '$http', '$q', function($http, $q) {

    this.fetchData = function(connector) {
        var defered = $q.defer();
        var httpPromise = $http.post(connector).success(function(data) {
            defered.resolve(data);
        }).error(function(data) {
            defered.resolve('ERROR: Unknown Error. Please contact the IT Service Desk.');
        });
        return defered.promise;
    };
}]);