angular.module('atbp', ['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                'content': { templateUrl: '/html/home.html' },
            },
            controller: 'HomeCtrl',
        })
        .state('signup', {
            url: '/signup',
            views: {
                'content': { templateUrl: '/html/signup.html' },
            },
            controller: 'SignupCtrl',
        })
        .state('login', {
            url: '/login',
            views: {
                'content': { templateUrl: '/html/login.html' },
            },
            controller: 'LoginCtrl',
        });

        //$urlRouterProvider.otherwise('home');
    }
])

.controller('SearchCtrl', ['$scope', '$http', function($scope, $http){
    $scope.searchItem = function(){
        $http.get('/search')
        .success(function(data){
            console.log(data);
        });
    };
}])

.controller('SignupCtrl', ['$scope', '$http', function($scope, $http){
    console.log("SignupCtrl called");
    $scope.searchItem = function(){
        $http.get('/search')
        .success(function(data){
            console.log(data);
        });
    };
}])

.controller('LoginCtrl', ['$scope', '$http', function($scope, $http){
    console.log("LoginCtrl called");
    $scope.searchItem = function(){
        $http.get('/search')
        .success(function(data){
            console.log(data);
        });
    };
}]);

