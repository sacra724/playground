var todoApp = angular.module("TechnoTodoApp", [ "ngAnimate", "ngCookies" ]);

todoApp.controller("TodoController", [ "$rootScope", "TaskAddFunc", "TabFunc", function(t, a, i) {
  "use strict";
  var n = this;
  n.init = function() {
    n.tab.init();
  }, n.taskAdd = a, n.tab = i, n.init();
} ]), todoApp.directive("myListItems", function() {
  return {
    restrict: "CAE",
    templateUrl: "../app/components/my-list-items.html"
  };
}), todoApp.factory("TaskAddFunc", [ function() {
  "use strict";
  var t = this;
  return t.data = {
    tasks: [],
    taskTitle: ""
  }, t.add = function() {
    var a = t.data.taskTitle;
    for (var i in t.data.tasks) {
      var n = t.data.tasks[i].title;
      if (a == n) return alert("そのタスクは既に登録されています"), !1;
    }
    t.data.tasks.push({
      title: t.data.taskTitle,
      done: !1
    }), t.data.taskTitle = "";
  }, {
    add: t.add,
    tasks: t.data.tasks,
    taskTitle: t.data.taskTitle,
    data: t.data
  };
} ]), todoApp.factory("TabFunc", [ function() {
  "use strict";
  var t = this;
  return t.data = {
    state: ""
  }, t.init = function() {
    t.data.state = void 0;
  }, t.change = function(a, i) {
    var n = i + "を表示しますか？";
    return t.data.state == a ? !1 : void (window.confirm(n) && (t.data.state = a, console.log(t.data.state)));
  }, {
    init: t.init,
    change: t.change,
    data: t.data
  };
} ]);