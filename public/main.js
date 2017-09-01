(function (){
	var app = angular.module('Adhiyagya', []);
	
	/*app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider
                .when('/', '/home')
                .otherwise('/home');

            $stateProvider.state('error', {
                url: '/error',
                templateUrl: 'app/login/404.html'
            });

            $stateProvider.state('home', {
                url: '/',
                templateUrl: 'index.html'
            });
			
			$stateProvider.state('about', {
                url: '/about',
                templateUrl: 'about/about-us.html'
            });
	}]);*/

	app.controller("homeController", function($scope, $http, $location) {
		console.log("Home controller");	
	});
})();	