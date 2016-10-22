(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['AccountService'];
function SignupController(AccountService) {

  var $ctrl = this;

  $ctrl.submitted = false;

  $ctrl.submit = function () {

    console.log("First Name", $ctrl.user.first_name);
    console.log("Last Name", $ctrl.user.last_name);
    console.log("Email", $ctrl.user.email);
    console.log("Phone", $ctrl.user.phone);
    console.log("Favorite", $ctrl.user.favorite);

    $ctrl.submitted = true;

    AccountService.setMyInfo($ctrl.user);
  };


}


})();
