var app = angular.module("demo", []);

app.controller("myController", ["$scope", function($scope){
    $scope.employees = [
        {
            name: "Ron",
            number: 101,
            grade: "A"
        },
        {
            name: "Jack",
            number: 90,
            grade: "B"
        },
        {
            name: "Hero",
            number: 5,
            grade: "C"
        },
        {
            name: "Donald",
            number: 200,
            grade: "A"
        }
    ];
}]);