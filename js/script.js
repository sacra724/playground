var todoApp = angular.module('TechnoTodoApp', []);

todoApp.controller('TodoController', function()
{
	'use strict';

	var self = this;

	self.init = function(){
		//set currentFilter as null
		self.currentFilter = false;
		console.log(self.currentFilter);
		//generate new task array
		self.tasks = [];
		//set taskTitle as ''
		self.taskTitle = '';
	}

	//add a new task method
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

	//change urrentFilter method
	self.changeFilter = function(filter){
		self.currentFilter = filter;
		console.log(self.currentFilter);
	};

	self.init()
});
