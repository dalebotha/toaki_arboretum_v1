'use strict';

var Trees = angular.module('Trees',[]);

Trees.config(function ($routeProvider) {
	$routeProvider	
		.when('/',
		{
			controller: 'treeController',
			templateUrl: '/partials/home.html'
		})
		.when('/about',
		{
			templateUrl:'/partials/about.html'
		})
		.otherwise({redirectTo: '/'});
})
.filter('strangeFilter', function (){
	return function(input) {
		var newString = input.toString();
		//console.log(newString);
		return newString.replace(/[\[\]']+/g,'').replace(/[,]+/g, " ");
	};
})
.filter('nameFilter', function (){
	return function(input) {
		var newString = input.toString();
		//console.log(newString);
		return newString.replace(/[\[\]']+/g,'').replace(/[,]+/g, ", \n");
	};
})
.filter('numFilter', function(){
	return function(items,searchNum) {

	

	if (!searchNum) {
      return items;
    }
		var returnedNums = [];
	    items.forEach( function(numberArray) {
	    	for (var i = 0, l = numberArray[2][2].length; i < l; i++) {
		    	if (numberArray[2][2][i] == searchNum) {
		   			returnedNums.push(numberArray);
		   			//console.log(numberArray[2][2]);
		   			//console.log(returnedNums[0][1][2]);
		    	}
	    	}
	    })
	    return returnedNums;
	}
})
.controller("treeController", function ($scope, $http) {
	$http.get('/data/trees.json')
		.then(function(tree) { 
			$scope.treeList = tree.data;
		});

});



  