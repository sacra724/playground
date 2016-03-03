var todoApp = angular.module('TechnoTodoApp', ['ngAnimate','ngCookies']);

todoApp.controller('TodoController', ['$cookies', function($cookies)
{
	'use strict';

	var self = this;

	self.init = function(){
		self.currentFilter = undefined ;
		self.tasks = new Array; //generate new task array
		self.taskTitle = ''; //set taskTitle empty
	};

	//method: add a new task
	self.addTask = function(){
		self.tasks.push({
			title: self.taskTitle,
			done: false
		});

		// $cookies.put(
		// 		'title', 'self.taskTitle'
		// 	);
		// $cookies.put(
		// 		'state', 'task.done'
		// 	);
		//reset input title

		self.taskTitle = '';

		// console.log($cookies.get("title"));
		// console.log($cookies.get("state"));

	};

	//method: change currentFilter
	self.changeFilter = function(filter){
		self.currentFilter = filter;
		console.log(self.currentFilter);

		$cookies.put("CurrentFilter", self.currentFilter);
		console.log($cookies.get("CurrentFilter"));
	};

	self.init();
}]);


todoApp.directive('myListItems', function(){
	return {
		restrict: 'CAE',
		templateUrl: '../app/components/my-list-items.html'
	};
});
