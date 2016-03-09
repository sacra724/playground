var todoApp = angular.module('TechnoTodoApp', ['ngAnimate','ngCookies']);

todoApp.controller('TodoController', ['$cookies', function($cookies)
{
	'use strict';

	var self = this;

	self.init = function(){
		self.currentFilter = undefined ;
		self.tasks = []; //generate new task array
		self.taskTitle = ''; //set taskTitle empty
	};

	//method: add a new task
	self.addTask = function(){
		var newTaskTitle = self.taskTitle;

		for (var j in self.tasks){
			var name = self.tasks[j]["title"];

			if (newTaskTitle == name) {
				alert("そのタスクは既に登録されています");
				return false;
			}
		}
		self.tasks.push({
			title: self.taskTitle,
			done: false
		});
		self.taskTitle = '';
	};

	//method: change currentFilter
	self.changeFilter = function(filter, tab){
		var msg = tab + "を表示しますか？";

		if (self.currentFilter == filter) {
			return false;
		} else {
			if (window.confirm(msg)){
				self.currentFilter = filter;
			}
		}
	};

	self.init();
}]);


todoApp.directive('myListItems', function(){
	return {
		restrict: 'CAE',
		templateUrl: '../app/components/my-list-items.html'
	};
});

// var todoApp = angular.module('TechnoTodoApp', ['ngAnimate','ngCookies']);

// todoApp.controller('TodoController',
// ['$rootScope', 'TaskAddFunc',
// function($rootScope, TaskAddFunc)
// {
// 	'use strict';

// 	var self = this;

// 	self.init = function()
// 	{
// 		self.taskAddFunc.init();
// 	};

// 	self.taskAddFunc = TaskAddFunc;

// 	self.init();

// }]);


// todoApp.directive('myListItems', function(){
// 	return {
// 		restrict: 'CAE',
// 		templateUrl: '../app/components/my-list-items.html'
// 	};
// });

// todoApp.factory('TaskAddFunc', function()
// {
// 	'use strict';

// 	var self = this;

// 	self.init = function(){
// 		self.currentFilter = undefined ;
// 		self.tasks = []; //generate new task array
// 		self.taskTitle = ''; //set taskTitle empty
// 	};

// 	//method: add a new task
// 	self.addTask = function(){
// 		var newTaskTitle = self.taskTitle;

// 		for (var j in self.tasks){
// 			var name = self.tasks[j]["title"];

// 			if (newTaskTitle == name) {
// 				alert("そのタスクは既に登録されています");
// 				return false;
// 			}
// 		}
// 		self.tasks.push({
// 			title: self.taskTitle,
// 			done: false
// 		});
// 		self.taskTitle = '';
// 	};

// 	//method: change currentFilter
// 	self.changeFilter = function(filter, tab){
// 		var msg = tab + "を表示しますか？";

// 		if (self.currentFilter == filter) {
// 			return false;
// 		} else {
// 			if (window.confirm(msg)){
// 				self.currentFilter = filter;
// 			}
// 		}
// 	};

// 	return {
// 		init 		 : self.init,
// 		addTask 	 : self.addTask,
// 		changeFilter : self.changeFilter,
// 	};
// }]);
