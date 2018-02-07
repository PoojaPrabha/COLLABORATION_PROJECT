/**
 * UserController
 */

app.controller('UserController', function($scope, UserService, $rootScope,
		$location, $cookieStore) {
	$scope.register = function() {
		UserService.register($scope.user).then(function(response) {
			alert('Registered successfully.. please login..')
			$location.path('/login')
		}, function(response) {
			$scope.error = response.data // ErrorClazz object
		})
	}

	$scope.login = function() {
		UserService.login($scope.user).then(function(response) {
			$rootScope.loggedInUser = response.data
			$cookieStore.put('loggedInUser', response.data)
			$location.path('/home') // valid credentials
		}, function(response) {
			$scope.error = response.data // ErrorClazz
			$location.path('/login')
		})

	}
	$rootScope.logout = function() {
		UserService.logout().then(function(response) {
			$scope.message = "LoggedOut Successfully.."
			$location.path('/login')
		}, function(response) {
			$scope.message = "Please Login.."
			$location.path('/login')
		})
	}

})
