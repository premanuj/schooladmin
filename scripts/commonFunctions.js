var classes;
var students_json = [];
var teachers_json = [];
var class_json = [];

if(sessionStorage.getItem('teacher_access_token')!=null){
	$('#admin-menu').hide();
	$('#teacher-menu').show();
}

if(sessionStorage.getItem('admin_access_token')!=null){
	$('#admin-menu').show();
	$('#teacher-menu').hide();
}


var listTeachers = function(){
	$.ajax({
			url : basepath + "/roles/3/teachers",
			type : 'GET',
			dataType: 'json',
			success : function(response){
				if(response.status===105){
					var str;
					console.log(response.data);
					$.each(response.data,function(keyRow, valueRow){
						var fname = valueRow['fname'];
						var mname = valueRow['mname'];
						var lname = valueRow['lname'];
						var email = valueRow['email'];
						var contact = valueRow['contacts'];
						var address = valueRow['address'];
						var dob = valueRow['dob'];
						var join_date = valueRow['join_date'];
						var id = valueRow['id'];
						if(fname==null)
							fname = "Not available";
						if(mname==null)
							mname = " "
						if (lname==null)
							lname = " "
						if(address==null)
							address = "Not available";
						if(contact==null)
							contact = "Not available"
						var json = {
						"fname": fname,
						"mname": mname,
						"lname": lname,
						"contact": contact,
						"address": address,
						"id": id,
						"dob": dob,
						"join_date": join_date,
					}
							str += '<tr class="row-teacher">';						
							str+='<td class="col-name">'+fname + " " + mname + " " + lname + '</td>';
							str+='<td class="col-email">'+email+'</td>';
							str+='<td class="col-contact">'+contact+'</td>';
							str+='<td class="col-address">'+address+'</td>';
							str+='<td class="col-edit"><a data-toggle="modal" href="#editModal" class="btn btn-sm btn-primary btn-flat pull-left edit-teacher" teacher-id = "'+valueRow['user_id']+'" user-id = "'+valueRow['id']+'">Edit</a></td>';
							str+='<td class="col-delete"><a href="#delete" class="btn btn-sm btn-primary btn-flat pull-left" id="delete-teacher" teacher-id = "'+valueRow['user_id']+'" user-id="'+valueRow['id']+'">Delete</a></td>';
							str+='</tr>';
						teachers_json.push(json);
					});
					$(".body-teacher").html(str);
				}else{
					console.log('something wrong');
				}
			},
			error: function(err) {
				console.log(err);
				console.log('errere');
			}
		});
}

// var listAllTeacher= function(){
// 	//listTeachers();
// 	//console.log(teachers_json);

//   $( "listTeachers" ).promise().done(function(valueRow) {
//     console.log(valueRow);
//   });
// }

var listClasses = function(){
	$.ajax({
			url : basepath + "/classes",
			type : 'GET',
			dataType: 'json',
			success : function(response){
				if(response.status===105){
					var classData = response.data;
					var uniqueClassData = classData.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
					console.log(uniqueClassData);
					$.each(response.data,function(keyRow, valueRow){
						var classes = valueRow['grade'];
							class_id = valueRow['id'];
						var json_data = {
						"class_id":class_id,
						"class_grade":classes
						}
						$("#class-menu").append('<li class = "class-student"><a href="students.php?id='+class_id+'&&class='+classes+'">Grade '+classes+'</a></li>');
						$("#result-menu").append('<li class = "class-student"><a href="results.php?id='+class_id+'&&class='+classes+'">Grade '+classes+'</a></li>');
						class_json.push(json_data);
					});
				}else{
					console.log('something wrong');
				}
			},
			error: function(err) {
				console.log(err);
				console.log('errere');
			}
		});
}

var listStudents = function(class_id){
	$.ajax({
		url : basepath + "/roles/2/classes/"+class_id+"/students",
		type : 'GET',
		dataType : 'json',
		success : function(response){
			console.log(response.data);
			if (response.status===105) {
				var str;
				$.each(response.data, function(keyRow, valueRow){
					var fname = valueRow['fname'];
					var mname = valueRow['mname'];
					var lname = valueRow['lname'];
					var contact = valueRow['contact'];
					var address = valueRow['address'];
					var id = valueRow['id'];
					var dob = valueRow['dob'];
					var email = valueRow['email'];
					var join_date = valueRow['join_date'];
					var grade = valueRow['grade'];
					var class_id = valueRow['class_id'];
					var json = {
						"fname": fname,
						"mname": mname,
						"lname": lname,
						"contact": contact,
						"address": address,
						"id": id,
						"dob": dob,
						"join_date": join_date,
						"class_id": class_id,
						"grade": grade
					}
							str += '<tr class="row-student">';
							str+='<td class="col-name">'+fname +" "+ mname +" "+lname + '</td>';
							str+='<td class="col-email">'+email+'</td>';
							str+='<td class="col-contact">'+contact+'</td>';
							str+='<td class="col-address">'+address+'</td>';
							//str+='<td class="col-edit"><a href = "students.php?id='+valueRow['id']+'">edit</a></td>';
							str+='<td class="col-edit"><a data-toggle="modal" href="#editModal" class="btn btn-sm btn-primary btn-flat pull-left edit-student" data = "'+valueRow['id']+'">Edit</a></td>';
							str+='<td class="col-delete"><a href="#delete" class="btn btn-sm btn-primary btn-flat pull-left" id="delete-student" data="'+id+'">Delete</a></td>';
						
						str+='</tr>';
						
						
						//$('.data-table').DataTable();
						students_json.push(json);
				});
				$("#body-students").html(str);
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