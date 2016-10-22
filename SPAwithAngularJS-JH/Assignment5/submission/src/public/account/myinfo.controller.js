(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

// MyInfoController.$inject = ['menuItems'];
function MyInfoController() {

  var $ctrl = this;

  var myinfo = {};

  myinfo.first_name    = "Chris";
  myinfo.last_name     = "Wei";
  myinfo.email_address = "yunzhi.wei@live.com";
  myinfo.phone_number  = "18621569380";
  myinfo.favorite_dish = "LA";

  $ctrl.myInfo = myinfo;
}


})();
