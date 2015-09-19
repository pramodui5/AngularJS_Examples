var app = angular.module("superhero", []);
app.directive("superman", function(){
    return{
        restrict: "E",
        template: "<div>Here I am save day</div>"
    }
});