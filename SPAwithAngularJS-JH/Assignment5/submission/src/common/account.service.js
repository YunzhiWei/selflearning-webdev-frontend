(function () {
"use strict";

angular.module('common')
.service('AccountService', AccountService);


function AccountService() {
  var service = this;

  var myinfo = {};

  myinfo.first_name    = "Chris";
  myinfo.last_name     = "Wei";
  myinfo.email_address = "yunzhi.wei@live.com";
  myinfo.phone_number  = "18621569380";
  myinfo.favorite_dish = "LA";

  service.setMyInfo = function (myInfo) {
    myinfo.first_name    = myInfo.first_name;
    myinfo.last_name     = myInfo.first_name;
    myinfo.email_address = myInfo.email_address;
    myinfo.phone_number  = myInfo.phone_number;
    myinfo.favorite_dish = myInfo.favorite_dish;
  };

  service.getMyInfo = function (myInfo) {
    return myinfo;
  };

}



})();
