$(document).ready(function(){
	$('#join-date').dateDropper();
    $('#dob').dateDropper();
	//console.log(id);
	listClasses();
	listStudents(global_class_id);
	

	$("#student_register").click(function(){
		console.log('here');
		var email = $("#email").val();
		var password = $("#password").val();
		var username = $("#username").val();
		$.ajax({
			url : basepath + "/roles/2/users",
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

$(document).delegate(".edit-student", "click", function () {
	//console.log(students_json);
		var student_id = $(this).attr("data");
		var student_details = students_json.filter((student)=>student.id == student_id);
		var class_details = class_json;
		console.log(student_details);
		var fname = student_details[0].fname;
		var mname = student_details[0].mname;
		var lname = student_details[0].lname;
		var dob = student_details[0].dob;
		var join_date = student_details[0].join_date;
		var address = student_details[0].address;
		var contact = student_details[0].contact;
		var class_id = student_details[0].class_id;
		$("#fname").val(fname);
		$("#mname").val(mname);
		$("#lname").val(lname);
		$("#dob").val(dob);
		$("#join-date").val(join_date);
		$("#new-address").val(address);
		$("#new-contact").val(contact);
		$("#edit_student_save").attr("save", student_id);
		
		var str = "";
		$.map( class_details, function( class_value, i ) {

			var class_grade =class_value['class_grade'];
			var grade_id = class_value['class_id']
			if(class_id === grade_id){
				console.log('one');
				console.log(class_grade);
				$("#class-default").val(class_grade);
				$("#class-default").attr("value", class_id);
			}
			str += '<option value = "'+grade_id+'" > Grade '+class_value['class_grade']+'</option>';
		});
		$("#class_id").append(str);
		
});

$(document).delegate("#edit_student_save", "click", function () {
		
		var fname = $("#fname").val();
		var mname = $("#mname").val();
		var lname = $("#lname").val();
		var dob = $("#dob").val();
		var join_date = $("#join-date").val();
		var contacts = $("#new-contact").val();
		var new_address = $("#new-address").val();
		var class_id = $("#class_id").val();
		var save = $(this).attr("save");
		$.ajax({
			url : basepath + "/roles/2/students/"+save,
			type : 'PUT',
			dataType : 'json',
			data : {fname : fname, mname: mname, lname : lname, contacts: contacts, address:new_address, dob:dob, join_date: join_date, class_id:class_id},
			success : function(response){
				if(response.status===104){
					$("#success-bar").css("display", "inline");
					$("#success-bar").fadeOut(5000);
					console.log('working');
				}else{
					console.log('no-working');
				}
				listStudents(global_class_id);
				$('#editModal').modal('hide');
			},
			error : function(err){
				console.log(err);
			}
		});
});

$(document).delegate("#delete-student", "click", function () {
		var student_id = $(this).attr("data");
		$.ajax({
			url: basepath+"/roles/2/students/"+student_id,
			type: 'DELETE',
			dataType: 'json',
			success: function(response){
				if (response.data===105) {
					showSuccess("Student deleted successfully.");
					listStudents(global_class_id);
				};
			},
			error: function(err){
				console.log(err);
			}
		});
		
});
		
});