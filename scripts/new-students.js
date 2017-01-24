$(document).ready(function(){
	listTeachers();
	listClasses();
	$('.datepicker-inline').datepicker({
		    startDate: '-3d'
		});

	function showStudents(){
		$.ajax({
		url: basepath+"/roles/2/students",
		type: "get",
		dataType: 'json',
		success: function(response){
			if (response.status===105) {
				var str;
				$.each(response.data, function(keyRow, valueRow){
					var email = valueRow['email'];
					var username = valueRow['username'];
					var json = {
						"email": email,
						"username": username
					}
							str += '<tr class="row-student">';
							str+='<td class="col-email">'+email+'</td>';
							str+='<td class="col-contact">'+username+'</td>';
							str+='<td class="col-edit"><a data-toggle="modal" href="#editModal" class="btn btn-sm btn-primary btn-flat pull-left edit-student" data = "'+valueRow['id']+'">Edit</a></td>';
							str+='<td class="col-delete"><a href="#delete" class="btn btn-sm btn-primary btn-flat pull-left delete-student" data="'+valueRow['id']+'">Delete</a></td>';
						
						str+='</tr>';
						
						
						//$('.data-table').DataTable();
						students_json.push(json);
				});
				$("#body-new-students").html(str);
			}else{
				console.log('wwwwwwwwwwwwwww');
			}
		},
		error: function(err){
			console.log('eeeeeeeeeeeeeeee')
			console.log(err);
		}
	});
}

	function getnewClasses(){
		$.ajax({
			url: basepath+"/classes",
			type: "get",
			dataType: 'json',
			success: function(response){
				if(response.status===105){
					var str = " ";
					var data = response.data;
					$.each(data, function(kewRow, valueRow){
						str+='<option value = "'+valueRow['id']+'">Grade'+valueRow['grade']+'</option>';
					});
					console.log(str);
					$("#class_id").append(str);
				}
			}
		});
	}

	showStudents();

	$("#student_register").click(function(){
		console.log('here');
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
		if (!ifBlank("Password", password)){
		    return false;
		}
		$.ajax({
			url : basepath + "/roles/2/users",
			type : 'POST',
			dataType : 'json',
			data : {email : email, username: username, password : password},
			success : function(response){
				if(response.status===105){
					$('#addModal').modal('hide');
					showStudents();
					showSuccess("Student Account Created Successfully.");
				}else{
					console.log('no-working');
				}
			},
			error : function(err){
				console.log(err);
			}
		});
	});

	$(document).delegate(".edit-student", "click", function(){
		var user_id = $(this).attr('data');
		$("#edit_student_save").attr("user-id", user_id);
		getnewClasses();
	});

	$(document).delegate("#edit_student_save", "click", function(){

		var user_id = $(this).attr('user-id');
		var class_id = $("#class_id").val();
		var fname = $("#fname").val();
		var mname = $("#mname").val();
		var lname = $("#lname").val();
		var class_id = $("#class_id").val();
		var address = $("#new-address").val();
		var contact = $("#new-contact").val();

		var join_date = $("#join-date").datepicker('getDate');
			join_date = new Date(join_date);
		var yy = join_date.getFullYear();		
		var mm = join_date.getMonth();
		var dd = join_date.getDate();
			join_date = yy+'-'+mm+'-'+dd;
		var dob = $("#dob").datepicker('getDate');
			dob = new Date(dob);
		var yy = dob.getFullYear();		
		var mm = dob.getMonth();
		var dd = dob.getDate();
			dob = yy+'-'+mm+'-'+dd;

		if (!ifBlank("First name", fname)){
		    return false;
		}
		if (!ifBlank("Date of Birth", dob)){
		    return false;
		}
		if (!ifBlank("Join Date", join_date)){
		    return false;
		}
		if (!ifBlank("Address", address)){
		    return false;
		}
		if (!ifBlank("Contact", contact)){
		    return false;
		}
		if (!ifNumeric("Contact", contact)){
		    return false;
		}

		$.ajax({
			url: basepath+"/users/"+user_id+"/students",
			type: "POST",
			dataType: 'json',
			data: {fname: fname, mname: mname, lname: lname, dob: dob, join_date: join_date, address: address, contact: contact, class_id: class_id},
			success: function(response){
				console.log(response.data);
				if(response.status===105){
					$("#editModal").modal('hide');
					showStudents();
				}
			}
		});

	});
	
	$(document).delegate('.delete-student', 'click', function(){
		var user_id = $(this).attr('data');
		if (!confirm("Are you sure you want to delete?")) {return false;};
		$.ajax({
			url: basepath+"/roles/2/users/"+user_id,
			type: "DELETE",
			dataType: "json",
			success: function(response){
				console.log(response);
				if(response.status===104){
					var data = response.data;
					showStudents();
					showSuccess("Student deleted successfully.");
				}
			},
			error: function(err){
				console.log(err);
			}
		});
	});
});