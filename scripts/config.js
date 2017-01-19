//******* Configurations variables and Functions *******//

 var basepath = "http://127.0.0.1:4040/api";
//var basepath = "http://139.59.25.134:3030";
settimeout = 1500;
function showError(message) {
  $(".alert-red").html("*" + message);
  $(".alert-red").show().focus();
  $("html, body").animate({scrollTop: 0});
  setTimeout(function() {
    $(".alert-red").html("");
    $(".alert-red").hide();
  }, settimeout);
}

function showSuccess(message) {
  $(".alert-green").html(message);
  $(".alert-green").show();
  $("html, body").animate({scrollTop: 0});
  setTimeout(function() {
    $(".alert-green").html("");
    $(".alert-green").hide();
  }, settimeout);
}

function showErrorValidation(message) {
  $(".alert-danger").html("*" + message);
  $(".alert-danger").show().focus();
  $("html, body").animate({scrollTop: 0});
  setTimeout(function() {
    $(".alert-danger").html("");
    $(".alert-danger").hide();
  }, 10000);
}
function ifBlank(type, value) {
  value = value.trim();
  if (value == '' || (/^\s*$/.test(value))) {
    showError(type + " Can Not Be Empty");
    return false;
  }
  else
  return true;
}


function ifMatch(type, value1, value2) {
  if (value1 != value2) {
    showError(type + " Do Not Match");
    return false;
  }
  else
  return true;
}

function ifValidEmail(type, value) {
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  if (!(testEmail.test(value))) {
    showError(type + " Should Be Valid");
    return false;
  }
  else
  return true;
}

function ifNumeric(type, value) {

  if (isNaN(value) == true) {
    showError(type + " Should Be Valid");
    return false;
  }
  else
  return true;
}

function formatDateToDDMMYYYY(fdate) {
  var dd = fdate.getDate();
  if (dd < 10) {
    dd = "0" + dd;
  }
  var mm = parseInt(fdate.getMonth()) + parseInt(1);
  if (mm < 10) {
    mm = "0" + mm;
  }
  var yyyy = fdate.getFullYear();
  var event_date = dd + "-" + mm + "-" + yyyy;
  return event_date;
}
//***** auto expand textarea *****//
function autoheight(a) {

  if (!$(a).prop('scrollTop')) {
    do {
      var b = $(a).prop('scrollHeight');
      var h = $(a).height();
      $(a).height(h - 5);
    }
    while (b && (b != $(a).prop('scrollHeight')));
  }
  ;
  $(a).height($(a).prop('scrollHeight') + 1);
}
//***** validate website url *****//
function validateWebsiteUrl(value) {
  var matches = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  if (!(matches.test(value))) {
    showError("Website url should be valid");
    return false;
  }
  else
  return true;
}
//***** validate website url *****//
function validateYouTubeUrl(value) {
  var matches = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  if (!(matches.test(value))) {
    showError("Website url should be valid");
    return false;
  }
  else
  return true;
}
//***** Bootsrap Input Mask MSIE *****//
jQuery.browser = {};
(function() {
  jQuery.browser.msie = false;
  jQuery.browser.version = 0;
  if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
    jQuery.browser.msie = true;
    jQuery.browser.version = RegExp.$1;
  }
})();

// **** Navigation Active class change ********//
function active(link){
  $(document).ready(function() {
    $(".menu").removeClass("active");
    $("."+link).addClass("active");
  });
}
//************** Logout ************************* //
$(document).delegate('.logout', 'click', function(e) {
  e.preventDefault();
  localStorage.clear();
  window.location.href="login.php";
});

//*************  Check User Login Status ****************** //
$(document).ready(function(){
  checkLogin();

    function checkLogin(){
      var user_id = localStorage.getItem("user_id");
      var username = localStorage.getItem("username");
      if(user_id > 0){
        $(".loggedout").hide();
        $(".loggedin").show();
      }

    }


});
