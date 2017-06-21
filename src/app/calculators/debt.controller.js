'use strict'

angular.module('inspinia')
.controller('usersController', function($scope, Users) {
  console.log("before ",$scope.users);
$scope.users=Users;
  console.log("after ",$scope.users);
});
