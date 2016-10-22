(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['AccountService', 'MenuService'];
function SignupController(AccountService, MenuService) {

  var $ctrl = this;

  $ctrl.processed = false;

  $ctrl.submit = function () {

    console.log("First Name: ", $ctrl.user.first_name);
    console.log("Last Name: ", $ctrl.user.last_name);
    console.log("Email: ", $ctrl.user.email);
    console.log("Phone: ", $ctrl.user.phone);
    console.log("Favorite: ", $ctrl.user.favorite);

    var promise = MenuService.getFavorieItem($ctrl.user.favorite);

    promise.then(function (response) {
      console.log("Response: ", response.data);
      AccountService.setMyInfo($ctrl.user);

      $ctrl.message = "Your information has been saved.";
      $ctrl.processed = true;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.", error);
      console.log("favorite return: ", promise);

      $ctrl.message = "No such menu number exists.";
      $ctrl.processed = true;
    });
  };


}


})();
