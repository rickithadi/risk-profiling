angular.module('inspinia').controller('useruleController', function ($scope, userService) {
  $scope.users = userService.list();
  $scope.newuser = {};


  $scope.saveuser = function () {
    console.log("save user");
    userService.save($scope.newuser);
      $scope.newuser = {};
  }


  $scope.delete = function (user_id) {

    userService.delete(user_id);
      if ($scope.newuser.user_id == user_id) $scope.newuser = {};
  }


  $scope.edit = function (user_id) {
      $scope.newuser = angular.copy(userservice.get(user_id));
  }
})
