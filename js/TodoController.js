function TodoController(){

	'use strict';

	var self = this;

	self.tasks = [];
	self.taskTitle = '';

	self.addTask = function(){
		console.log("you added " + self.taskTitle);
		self.tasks.push({
			title: self.taskTitle,
			done: false
		});
		self.taskTitle = '';
	};
}