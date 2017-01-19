$(document).ready(function(){
	//console.log(teachers_json);
	listTeachers();
	listClasses();
	
	$("#teacher_register").click(function(){
		var email = $("#email").val();
		var password = $("#password").val();
		var username = $("#username").val();
		$.ajax({
			url : basepath + "/roles/3/users",
			type : 'POST',
			dataType : 'json',
			data : {email : email, username: username, password : password},
			success : function(response){
				if(response.status===105){
					$("#success-bar").css("display", "inline");
					$("#success-bar").fadeOut(5000);
					console.log('working');
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
		var teacher_id = $(this).attr("data");
		var teacher_details = teachers_json.filter((teacher)=>teacher.id == teacher_id);
		var class_details = class_json;
		console.log(teacher_details);
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
		$("#new-address").val(address);
		$("#new-contact").val(contact);
		$("#edit_student_save").attr("save", student_id);
		
});

$(document).delegate("#edit_teacher_save", "click", function () {
		$('#editModal').modal('hide');
		var fname = $("#fname").val();
		var mname = $("#mname").val();
		var lname = $("#lname").val();
		var dob = $("#dob").val();
		var join_date = $("#join-date").val();
		var contacts = $("#new-contact").val();
		var new_address = $("#new-address").val();
		var save = $(this).attr("save");
		console.log("saves"+save +"class");
		console.log(basepath + "/users/3/teachers/"+save);
		$.ajax({
			url : basepath + "/users/3/students/"+save,
			type : 'PUT',
			dataType : 'json',
			data : {fname : fname, mname: mname, lname : lname, contacts: contacts, address:new_address, dob:dob, join_date: join_date},
			success : function(response){
				if(response.status===105){
					$("#success-bar").css("display", "inline");
					$("#success-bar").fadeOut(5000);
					console.log('working');
				}else{
					console.log('no-working');
				}
			},
			error : function(err){
				console.log(err);
			}
		});
});

$(document).delegate("#delete-teacher", "click", function () {
	//console.log(students_json);
	if (!confirm("Are you sure you want to delete?")) {return false;};
		var teacher_id = $(this).attr("data");
		$.ajax({
			url: basepath+"/roles/3/teachers/"+teacher_id,
			type: 'DELETE',
			dataType: 'json',
			success: function(response){
				console.log(response);
				if (response.status===104) {
					$("#success-bar").css("display", "inline");
					$("#success-bar").val("Student deleted successfully");
					$("#success-bar").fadeOut(5000);
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