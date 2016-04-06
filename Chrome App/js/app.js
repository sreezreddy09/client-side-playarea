var myApp = angular.module('myApp', []);

//creating mainContainer
myApp.controller('mainController', mainCtrl);

function mainCtrl($scope, $timeout, Weather){
	$scope.date = {};
	var updateTime = function (){
		$scope.date.raw = new Date();
		$timeout(updateTime, 1000);
	}
	updateTime();
	
	$scope.weather = {};
	Weather.getWeatherForecast('CA/San_Francisco')
	.then(function(data){
		$scope.weather.forecast = data;
	});
}



//creating service using provider function
myApp.provider('Weather', function(){
	var apiKey = '';
	this.getUrl = function (type, ext){
		return "http://api.wunderground.com/api/" +
			this.apiKey + "/" + type + "/q/" +
				ext + '.json';
		
	}
	this.setApiKey = function(key){
		if(key){
			this.apiKey = key;
		}
	};
	this.$get = function($q, $http){
		var self = this;
		return {
			getWeatherForecast : function (city){
				var d = $q.defer();
				$http({
					method : 'GET',
					url : self.getUrl('forecast', city),
					cache : true
				}).success(function(data){
					d.resolve(data.forecast.simpleforecast);
				}).error(function(err){
					d.reject(err);
				});
				return d.promise;
			}
		}
	};
});


//Creating configuration function
myApp.config(function(WeatherProvider){
	WeatherProvider.setApiKey('47efc51cf91776da');
});
