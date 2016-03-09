var todoApp = angular.module("TechnoTodoApp", [ "ngAnimate", "ngCookies" ]);

todoApp.controller("TodoController", [ "$cookies", function(t) {
  "use strict";
  var i = this;
  i.init = function() {
    i.currentFilter = void 0, i.tasks = [], i.taskTitle = "";
  }, i.addTask = function() {
    var t = i.taskTitle;
    for (var e in i.tasks) {
      var r = i.tasks[e].title;
      if (t == r) return alert("そのタスクは既に登録されています"), !1;
    }
    i.tasks.push({
      title: i.taskTitle,
      done: !1
    }), i.taskTitle = "";
  }, i.changeFilter = function(t, e) {
    var r = e + "を表示しますか？";
    return i.currentFilter == t ? !1 : void (window.confirm(r) && (i.currentFilter = t));
  }, i.init();
} ]), todoApp.directive("myListItems", function() {
  return {
    restrict: "CAE",
    templateUrl: "../app/components/my-list-items.html"
  };
});