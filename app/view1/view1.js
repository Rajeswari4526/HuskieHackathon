'use strict';
define([
	'angular',
	'angularRoute',
	'qrCodeLib1',
	'qrCodeLib2',
	'angularBootstrap',
	'angularfire',
	'firebase'
], function(angular) {

	angular.module('myApp.view1', ['ngRoute','qrScanner','ui.bootstrap','firebase'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])
		.run(function() {
			firebase.initializeApp({
				apiKey: 'AIzaSyAzXuFx4A2y87H3ko6My94-ZWGF_pyOdrI',
				authDomain: 'pickme-d038c.firebaseapp.com',
				databaseURL: 'https://pickme-d038c.firebaseio.com/',
				storageBucket: 'pickme-d038c.appspot.com'
			});
		})
	.controller('View1Ctrl', ['$scope','$firebaseObject',function($scope, $firebaseObject) {

		var ref = firebase.database().ref();

		$scope.data = $firebaseObject(ref);
		
		$scope.onSuccess = function(data) {
			console.log(data);
		};
		$scope.onError = function(error) {
			console.log(error);
		};
		$scope.onVideoError = function(error) {
			console.log(error);
		};
	}]);
});
