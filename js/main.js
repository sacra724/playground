// var todoApp = angular.module('TechnoTodoApp', ['ngAnimate','ngCookies']);

// todoApp.controller('TodoController', ['$cookies', function($cookies)
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

// 	self.init();
// }]);


// todoApp.directive('myListItems', function(){
// 	return {
// 		restrict: 'CAE',
// 		templateUrl: '../app/components/my-list-items.html'
// 	};
// });

var todoApp = angular.module('TechnoTodoApp', ['ngAnimate','ngCookies']);

todoApp.controller('TodoController',
['$rootScope', 'TaskAddFunc', 'TabFunc',
function($rootScope, TaskAddFunc, TabFunc)
{
	'use strict';

	var self = this;

	self.init = function()
	{
		// self.taskAdd.init();
		self.tab.init();
	};

	self.taskAdd = TaskAddFunc;
	self.tab = TabFunc;

	self.init();
}]);


todoApp.directive('myListItems', function(){
	return {
		restrict: 'CAE',
		templateUrl: '../app/components/my-list-items.html'
	};
});

todoApp.factory('TaskAddFunc', [function()
{
	'use strict';

	var self = this;

	self.data = {
		tasks 	  : [],
		taskTitle : '',
	};

	//method: add a new task
	self.add = function(){
		var newTaskTitle = self.data.taskTitle;

		for (var j in self.data.tasks){
			var name = self.data.tasks[j]["title"];

			if (newTaskTitle == name) {
				alert("そのタスクは既に登録されています");
				return false;
			}
		}

		self.data.tasks.push({
			title : self.data.taskTitle,
			done  : false
		});

		self.data.taskTitle = '';
	};

	return {
		add 	  : self.add,
		tasks     : self.data.tasks,
		taskTitle : self.data.taskTitle,
		data      : self.data,
	};
}]);

todoApp.factory('TabFunc', [function()
{
	'use strict';

	var self = this;

	self.data = {
		state : "",
	};

	self.init = function(){
		self.data.state = undefined;
	};

	//method: change filter
	self.change = function(tabState, tab){
		var msg = tab + "を表示しますか？";

		if (self.data.state == tabState) {
			return false;
		} else {
			if (window.confirm(msg)){
				self.data.state = tabState;
				console.log(self.data.state);
			}
		}
	};

	return {
		init 	: self.init,
		change  : self.change,
		data    : self.data,
	};
}]);