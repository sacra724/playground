var todoApp = angular.module('TechnoTodoApp', []);

todoApp.controller('TodoController', function()
{
	'use strict';

	var self = this;

	self.init = function(){
		self.currentFilter = '';
		//generate new task array
		self.tasks = [];
		//set taskTitle as ''
		self.taskTitle = '';
	}

	//method: add a new task
	self.addTask = function(){
		self.tasks.push({
			title: self.taskTitle,
			done: false
		});
		//reset input title
		self.taskTitle = '';
	};

	//Filitering model
	self.filter = {
		done: { done: true },
		incomplete: { done: false }
	};

	//method: change currentFilter
	self.changeFilter = function(filter){
		self.currentFilter = filter;
		console.log(self.currentFilter);
	};

	self.init()
});

todoApp.directive('myListItems', function(){
	return {
		restrict: 'CAE',
		templateUrl: '../app/components/my-list-items.html'
	};
});
