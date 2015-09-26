/**
 * Created by Pramod on 27-09-2015.
 */
angular.module('countryDirective', [])
        .directive('country', function(){
    return {
        scope: { country: '=' },
        restrict: 'A',
        templateUrl: 'country.html',
        controller: function($scope, countries){
            countries.find($scope.country.id, function(country) {
                $scope.flagURL = country.flagURL;
            });
        }
    };
});