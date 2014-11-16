angular.module('atbp', ['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'HomeCtrl',
        })

        .state('signup', {
            url: '/signup',
            templateUrl: '/html/signup.html',
            controller: 'SignupCtrl',
        })

        .state('login', {
            url: '/login',
            templateUrl: '/html/login.html',
            controller: 'LoginCtrl',
        });

        $urlRouterProvider.otherwise('home');
    }
])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
    $scope.search_item = "";

    $scope.search = function(){
        console.log('start searching ' + $scope.search_item);

        /*$http({
            url : 'users',
            method : "get",
            params : {
                search_item: $scope.search_item
            }
        }).success(function(res){
            console.log(res);
        });*/

        var result = {'name':'Product', 'detail':'The quick brown fox jumps over the lazy dog', 'price':100.00};

        console.log(result);
    };
}])

.controller('SignupCtrl', ['$scope', function($scope){
    $scope.ctrl = 'Signup';
}])

.controller('LoginCtrl', ['$scope', function($scope){
    $scope.ctrl = 'Login';
}]);

