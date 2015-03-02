angular.module ('todoapp', [])
.controller('todo',['$scope',function($scope){
	$scope.todos = [
	{text:'learn angular', done:true},
      {text:'build an angular app', done:false}];

    $scope.addTodo = function(){

    	$scope.todos.push({text:$scope.todoText, done:false});
    	$scope.todoText ='';
    };

    $scope.remaining = function(){

    	var count = 0;
    	angular.forEach($scope.todos, function(todo1){
    		count += todo1.done ? 0 : 1;
    	});
    	return count;
    }; 
     
     $scope.del = function(){
     	var oldTodos = $scope.todos;
     	$scope.todos = [];
     	angular.forEach(oldTodos, function(todo1){

     		if(!todo1.done) $scope.todos.push(todo1);
     	});
     };

    


}]);