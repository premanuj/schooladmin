$(document).ready(function(){
	//console.log(teachers_json);
	listTeachers();
	listClasses();
	$('.datepicker-inline').datepicker({
    startDate: '-3d'
});
	
	$("#teacher_register").click(function(){
		var email = $("#email").val();
		var password = $("#password").val();
		var username = $("#username").val();
		if (!ifBlank("Email", email)){
		    return false;
		}
		if(!ifValidEmail("Email", email)){
			return false;
		}
		if (!ifBlank("Username", username)){
		    return false;
		}
		if (!ifBlank("password", password)){
		    return false;
		}
		
		$.ajax({
			url : basepath + "/roles/3/users",
			type : 'POST',
			dataType : 'json',
			data : {email : email, username: username, password : password},
			success : function(response){
				if(response.status===105){
					$('#addModal').modal('hide');
					listTeachers();
					showSuccess("Teacher's account created successfully.");
				}else{
					console.log('no-working');
				}
			},
			error : function(err){
				console.log(err);
			}
		});
	});

	$(document).delegate(".edit-teacher", "click", function () {
	//console.log(students_json);
		var teacher_id = $(this).attr("teacher-id");
		var user_id = $(this).attr("user-id");

		var teacher_details = teachers_json.filter((teacher)=>teacher.id == teacher_id);
		var class_details = class_json;
		console.log(teachers_json);
		console.log(teacher_details);
		if (teacher_details.length!=0) {
			var fname = teacher_details[0].fname;
			var mname = teacher_details[0].mname;
			var lname = teacher_details[0].lname;
			var dob = teacher_details[0].dob;
			var join_date = teacher_details[0].join_date;
			var address = teacher_details[0].address;
			var contact = teacher_details[0].contact;
			$("#fname").val(fname);
			$("#mname").val(mname);
			$("#lname").val(lname);
			$("#dob").val(dob);
			$("#join-date").val(join_date);
			//$("#join-date").datepicker();
			$("#new-address").val(address);
			$("#new-contact").val(contact);
		}
		$("#edit_teacher_save").attr("save", user_id);
		$("#edit_teacher_save").attr("teacher-id", teacher_id);
		
});

$(document).delegate("#edit_teacher_save", "click", function () {

		var fname = $("#fname").val();
		var mname = $("#mname").val();
		var lname = $("#lname").val();
		var dob = $("#dob").val();
		var dob = $("#dob").datepicker('getDate');
			dob = new Date(dob);
		var yy = dob.getFullYear();
		var mm = dob.getMonth();
		var dd = dob.getDate();
			dob = yy+'-'+mm+'-'+dd;
		var join_date = $("#join-date").datepicker('getDate');
			join_date = new Date(join_date);
		var yy = join_date.getFullYear();		
		var mm = join_date.getMonth();
		var dd = join_date.getDate();
			join_date = yy+'-'+mm+'-'+dd;
		var contacts = $("#new-contact").val();
		var new_address = $("#new-address").val();
		var save = $(this).attr("save");
		var teacher_id = $(this).attr("teacher-id");
		console.log("-dob-:"+dob)

		if (!ifBlank("First name", fname)){
		    return false;
		}
		if(mname==null)
			mname=" ";
		if(lname==null)
			lname = " "
		if (!ifBlank("Date of Birth", dob)){
		    return false;
		}
		if (!ifBlank("Join Date", join_date)){
		    return false;
		}
		if (!ifBlank("Address", new_address)){
		    return false;
		}
		if (!ifBlank("Contact", contacts)){
		    return false;
		}
		if (!ifNumeric("Contact", contacts)){
		    return false;
		}

		console.log("saves"+save +"class");
		console.log(basepath + "/users/3/teachers/"+save);
		console.log(teacher_id);
		if(teacher_id=='null'){
			$.ajax({
				url : basepath + "/users/"+save+"/teachers",
				type : 'POST',
				dataType : 'json',
				data : {fname : fname, mname: mname, lname : lname, contacts: contacts, address:new_address, dob:dob, join_date: join_date},
				success : function(response){
					console.log(response);
					if(response.status===104){
						$('#editModal').modal('hide');
						listTeachers();
						console.log('working');
					}else{
						console.log(response);
						console.log('no-working');
					}
				},
				error : function(err){
					console.log(err);
				}
			});
			console.log(teacher_id);
		}else{
			$.ajax({
				url : basepath + "/users/"+save+"/teachers/"+teacher_id,
				type : 'PUT',
				dataType : 'json',
				data : {fname : fname, mname: mname, lname : lname, contacts: contacts, address:new_address, dob:dob, join_date: join_date},
				success : function(response){
					console.log(response);
					if(response.status===104){
						$('#editModal').modal('hide');
						showSuccess("Updated successfuly");
						listTeachers();
						console.log('working');
					}else{
						console.log('no-working');
					}
				},
				error : function(err){
					console.log(err);
				}
			});
		}
});

$(document).delegate("#delete-teacher", "click", function () {
	//console.log(students_json);
	if (!confirm("Are you sure you want to delete?")) {return false;};
		var teacher_id = $(this).attr("teacher-id");
		var user_id = $(this).attr("user-id");
		console.log(teacher_id, user_id);
		$.ajax({
			url: basepath+"/roles/3/users/"+user_id+"/teachers/"+teacher_id,
			type: 'DELETE',
			dataType: 'json',
			success: function(response){
				console.log(response);
				if (response.status===104) {
					console.log('working');
					listTeachers();
				}else{
					console.log('not working');
				};
			},
			error: function(err){
				console.log(err);
			}
		});
		
});
	
});