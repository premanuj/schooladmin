$(document).ready(function(){
	//var basepath = "http://127.0.0.1:4040/api"
	var admin_status = false;
	var teacher_status = false;
	$('.teacher-logo').hide();
	$('#teacher-sign-in').hide();
	$('#admin-login').hide();

	$("#teacher-login").click(function(){
		$('.admin-logo').hide();
		$('#admin-sign-in').hide();
		$('.teacher-logo').show();
		$('#teacher-sign-in').show();
		$('#admin-login').show();
		$('#teacher-login').hide();
	});

	$("#admin-login").click(function(){
		$('.admin-logo').show();
		$('#admin-sign-in').show();
		$('.teacher-logo').hide();
		$('#teacher-sign-in').hide();
		$('#admin-login').hide();
		$('#teacher-login').show();
	});

	$("#admin-sign-in").click(function(){
		var email = $("#email").val();
		var password = $("#password").val();
		if (ifBlank("Email", email) === false)
          return false;
      	if (ifBlank("Password", password) === false)
          return false;
		$.ajax({
			url : basepath +"/roles/1/users/login",
			type: 'POST',
			dataType: 'json',
			data : {email: email, password: password},
			success : function(response){
				if (response.status === 105) {
					var admin_id = response.data.id;
					var admin_email = response.data.email;
					var admin_username = response.data.username;
					var admin_access_token= response.data.access_token;
					sessionStorage.setItem("admin_access_token", admin_access_token);
					localStorage.setItem("admin_id", admin_id);
					localStorage.setItem("admin_email", admin_email);
					localStorage.setItem("admin_username", admin_username);
					admin_status = true;
					teacher_status = false;
					showSuccess("Login Successful! Redirecting...");
                  	setTimeout(function() {
                      window.location.href = "teachers.php?ref="+admin_access_token;
                  	}, settimeout);

				}else{
					showError("Invalid email or password");
					
				}
			}
		});//ajax
	});//on click
	
	$("#teacher-sign-in").click(function(){
		var email = $("#email").val();
		var password = $("#password").val();
		if (ifBlank("Email", email) === false)
          return false;
      	if (ifBlank("Password", password) === false)
          return false;
		$.ajax({
			url : basepath +"/roles/3/users/login",
			type: 'POST',
			dataType: 'json',
			data : {email: email, password: password},
			success : function(response){

				if (response.status === 105) {
					var teacher_id = response.data.id;
					var teacher_email = response.data.email;
					var teacher_username = response.data.username;
					var teacher_access_token= response.data.access_token;
					sessionStorage.setItem("teacher_access_token", teacher_access_token);
					localStorage.setItem("teacher_id", teacher_id);
					localStorage.setItem("teacher_email", teacher_email);
					localStorage.setItem("teacher_username", teacher_username);
					showSuccess("Login Successful! Redirecting...");
					admin_status = false;
					teacher_status = true;
                  	setTimeout(function() {
                      window.location.href = "teachers-index.php?ref="+teacher_access_token;
                  	}, settimeout);

				}else{
					showError("Invalid email or password");
					
				}
			}
		});//ajax
	});//on click
});