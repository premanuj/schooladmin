$(document).ready(function(){
	listTeachers();
	listClasses();
	var count = 1;
	var teacher_id = localStorage.getItem('teacher_id');
	var teacher_details_info = [];
	$("#add-teacher-profile").hide();	
	var teacherProfile = function(){
		$.ajax({
			url: basepath+"/roles/3/teachers",
			type: 'GET',
			dataType: 'json',
			success: function(response){
				if(response.status===105){
					var str ;
					var teacher_data = response.data;
					var single_teacher_data = teacher_data.filter((teacher, index, arr)=>arr[index].user_id==teacher_id)
					if (single_teacher_data.length>0) {
						var fname = single_teacher_data[0]['fname'];
						var mname = single_teacher_data[0]['mname'];
						var lname = single_teacher_data[0]['lname'];
						var address = single_teacher_data[0]['address'];
						var contact = single_teacher_data[0]['contacts'];
						var dob = single_teacher_data[0]['dob'];
						var join_date = single_teacher_data[0]['join_date'];
						var user_id = single_teacher_data[0]['user_id'];
						var id = single_teacher_data[0]['id'];
						var email = single_teacher_data[0]['email'];
						localStorage.setItem('t_id', id);
						$("#old-fname").html(fname);
						$("#old-mname").html(mname);
						$("#old-lname").html(lname);
						$("#old-address").html(address);
						$("#old-contact").html(contact);
						$("#old-dob").html(dob);
						$("#old-email").html(email);
						$("#old-join-date").html(join_date);
						var json = {
							"id": id,
							"fname": fname,
							"mname" : mname,
							"lname" : lname,
							"address" : address,
							"contact" : contact,
							"dob" : dob,
							"join_date" : join_date,
							"email" : email,
							"user_id" : user_id
						}
						teacher_details_info.push(json);	

					}else{
						$("#teacher-profile-body").hide();
						$("#teacher-empty-body").show();
						$("#teacher-empty-body p").html("Your Profile is empty. Edit your Profile.");
						$("#add-teacher-profile").show();
						$("#edit-teacher-profile").hide();
						$("#content-empty-exam-question").hide();
						$("#content-class-exam-question").hide();
					}
				}
			}

		});
}

var classAssignment = function(){
	$("#content-class-exam").show();
	$("#content-main-exam").hide();
	$("#content-empty-exam").hide();
	$("#content-empty-exam-question").hide();
	$("#content-class-exam-question").hide();
	$("#add-objective-exam-question").hide();
	$("#add-subjective-exam-question").hide();
	teacherProfile();
	var t_id = localStorage.getItem('t_id');
	$.ajax({
		url: basepath+"/teachers/"+t_id+"/subjects",
		type: "GET",
		dataType: "json",
		success: function(response){
			var str;
			if(response.status===105){
				$.each(response.data, function(keyRow, valueRow){
					var id = valueRow['id'];
					var grade = valueRow['grade'];
					var subject = valueRow['subject'];
					str += '<tr class="row-student">';						
					str+='<td class="col-name">'+grade+ '</td>';
					str+='<td class="col-name">'+subject+ '</td>';
					str+='<td class="col-view"><a class="btn btn-sm btn-primary btn-flat pull-left view-exam" data = "'+id+'">View Details</a></td>';
					str+='</tr>';
				});
				$("#body-exam").html(str);
			}else{
				console.log('errrorrrrrr');
			}
		}
	});
}

classAssignment();

$(document).delegate(".view-exam", "click", function(){
	var subject_id = $(this).attr("data");
	localStorage.setItem("subject_id", subject_id);
	$("#add-exam").attr("data", subject_id);
	$("#content-class-exam").hide();
	$.ajax({
		url: basepath+"/teachers/"+teacher_id+"/subjects/"+subject_id+"/works",
		type: "GET",
		dataType: "json",
		success: function(response){
			var str = " "; 
			var work_id;
			if(response.status===105){
				
				if(response.data.length===0){
					$("#content-main-exam").hide();
					$("#content-empty-exam").show();
				}else{
					$("#content-main-exam").show();
					$.each(response.data, function(keyRow, valueRow){
						var assignment_title = valueRow['work_title'];
						var created_date = valueRow['create_date'];
						var submit_date = valueRow['submit_date'];
						work_id = valueRow['id'];
						var work_type = valueRow["work_type"];
						if(work_type=='e'){
							str += '<tr class="row-student">';						
							str+='<td class="col-name">'+assignment_title+ '</td>';
							str+='<td class="col-name">'+created_date+ '</td>';
							str+='<td class="col-name">'+submit_date+ '</td>';
							str+='<td class="col-view"><a data-toggle="modal" href="#editExamModal" class="btn btn-sm btn-primary btn-flat pull-left edit-exam" data = "'+work_id+'">Edit</a></td>';
							str+='<td class="col-view"><a class="btn btn-sm btn-primary btn-flat pull-left view-question" data = "'+work_id+'" subject_id = "'+subject_id+'">Questions</a></td>';
							str+='<td class="col-view"><a class="btn btn-sm btn-primary btn-flat pull-left delete-exam" data = "'+work_id+'" subject_id = "'+subject_id+'">Delete</a></td>';
							str+='</tr>';
						}
					});
					if(str!=" "){
						$("#body-main-exam").html(str);
						$("#edit_exam_save").attr("subject_id", subject_id);
						$("#edit_exam_save").attr("work_id", work_id);
					}else{
						$("#content-main-exam").hide();
						$("#content-empty-exam").show();
					}
				}

			}
		}

	});

});


$(document).delegate(".view-question", "click", function(){
	$("#content-main-exam").hide();
	$("#content-empty-exam").hide();
	var t_id = localStorage.getItem('t_id');
	var work_id = $(this).attr('data');
	localStorage.setItem("work_id", work_id);
	var subject_id = $(this).attr('subject_id');
	$.ajax({
		url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/questions",
		type: "GET",
		dataType: "json",
		success: function(response){
			if(response.status===105){
				var all_questions = response.data.question;
				var all_option = response.data.option;
				var objective_questions = all_questions.filter((question, index, arr)=> question.option_id != null);
				var subjective_questions = all_questions.filter((question, index, arr)=> question.option_id == null);
				if(response.data.question.length===0){
					$("#content-empty-exam-question").show();
					$("#content-class-exam-question").hide();

				}else{
					$("#content-empty-exam-question").hide();
					$("#content-class-exam-question").show();
					var strObj, strSubj, ans;
					if(objective_questions.length!=0 && subjective_questions.length != 0){
						$(".objective-questions").show();
						$(".subjective-questions").show();
						strObj = '<table class="col-md-10">';
						strObj+='<thead><tr><th colspan = "3"><h2>Objective Questions</h2></th></tr><thead>';
						strObj+='<tbody>';
						var sn = 0;
						$.each(objective_questions, function(keyRow, valueRow){
							strObj+= '<tr style = "height:10px"><h3><td>'+(sn+1)+'</td><td>'+valueRow['question_title']+'</td></h3></tr> ';
							var objective_option = all_option[sn];
							sn+=1
								$.each(objective_option, function(key, value){
									if(value['id']==valueRow['option_id']){
										ans = value['label'];
									}
								strObj+='<tr><td class="col-md-1">'+value['label']+'</td><td class="col-md-10">'+value['opt']+'</td><td class="col-md-1"></td></tr>';
								});
							strObj+='<tr><td class="col-md-2">Correct Ans: </td><td class="col-md-9">'+ans+'</td><td class="col-md-1"></td></tr>';
							strObj+='<tr><td colspan = "3"><a data-toggle="modal" href="#askForQuestionDeleteModal" class="btn btn-sm btn-danger btn-flat pull-right delete-question" question-id = "'+valueRow['id']+'">Delete Question</a></td></tr>'
						});
						strObj+='</tbody></table>';


						strSubj = '<table class="col-md-10">';
						strSubj+='<thead><tr><th colspan = "3"><h2>Subjective Questions</h2></th></tr><thead>';
						strSubj+='<thead>';
						var sn = 0;
						//console.log(subjective_questions);
						$.each(subjective_questions, function(keyRow, valueRow){
							sn+=1
							strSubj+= '<tr><td>'+sn+'</td><td>'+valueRow['question_title']+'</td></tr> ';
							strSubj+='<tr><td colspan = "2"><a data-toggle="modal" href="#askForQuestionDeleteModal" class="btn btn-sm btn-danger btn-flat pull-right delete-question" question-id = "'+valueRow['id']+'">Delete Question</a></td></tr>'

							
						});
						strSubj+='</tbody></table>';
						$('.objective-questions').append(strObj);
						$('.subjective-questions').append(strSubj);
					}//both objective and subjective

					if(objective_questions.length!=0 && subjective_questions.length == 0){
						$(".subjective-questions").hide();
						strObj = '<table class="col-md-10">';
						strObj+='<thead><tr><th colspan = "3"><h2>Objective Questions</h2></th></tr><thead>';
						strObj+='<tbody>';
						var sn = 0;
						$.each(objective_questions, function(keyRow, valueRow){
							strObj+= '<tr style = "height:10px"><h3><td>'+(sn+1)+'</td><td>'+valueRow['question_title']+'</td></h3></tr> ';
							var objective_option = all_option[sn];
							sn+=1
								$.each(objective_option, function(key, value){
									if(value['id']==valueRow['option_id']){
										ans = value['label'];
									}
								strObj+='<tr><td class="col-md-1">'+value['label']+'</td><td class="col-md-10">'+value['opt']+'</td><td class="col-md-1"></td></tr>';
								});
							strObj+='<tr><td class="col-md-2">Correct Ans: </td><td class="col-md-9">'+ans+'</td><td class="col-md-1"></td></tr>';
							strObj+='<tr><td colspan = "3"><a data-toggle="modal" href="#askForQuestionDeleteModal" class="btn btn-sm btn-danger btn-flat pull-right delete-question" question-id = "'+valueRow['id']+'">Delete Question</a></td></tr>'
						});
						strObj+='</tbody></table>';
						$('.objective-questions').append(strObj);

					}//objective only

					if(objective_questions.length==0 && subjective_questions.length != 0){
						$(".objective-questions").hide();
						strSubj = '<table class="col-md-10">';
						strSubj+='<thead><tr><th colspan = "3"><h2>Subjective Questions</h2></th></tr><thead>';
						strSubj+='<thead>';
						var sn = 0;
						$.each(subjective_questions, function(keyRow, valueRow){
							sn+=1
							strSubj+= '<tr><td>'+sn+'</td><td>'+valueRow['question_title']+'</td></tr> ';
							strSubj+='<tr><td colspan = "2"><a data-toggle="modal" href="#askForQuestionDeleteModal" class="btn btn-sm btn-danger btn-flat pull-right delete-question" question-id = "'+valueRow['id']+'">Delete Question</a></td></tr>'							
						});
						strSubj+='</tbody></table>';
						$('.subjective-questions').append(strSubj);
					}//subjective only
				}
				//return;
			}
		}
	});
});

$(document).delegate(".delete-question", "click", function(){
	var question_id = $(this).attr("question-id");
	$("#deleteQuestion-modal").attr("question-id", question_id);
});

$(document).delegate("#deleteQuestion-modal", "click", function(){
	var question_id = $(this).attr("question-id");
	var work_id = localStorage.getItem('work_id');
	var t_id = localStorage.getItem('t_id');
	var subject_id = localStorage.getItem('subject_id');
	$.ajax({
		url: basepath+"/teachers/"+t_id+"_id/subjects/"+subject_id+"/works/"+work_id+"/questions/"+question_id,
		type: "DELETE",
		dataType: "json",
		success: function(response){
			$("#askForQuestionDeleteModal").modal('hide');
			viewAfterQuestionActions();
			showSuccess("Question deleted successfully.");
		}
	});
});


function viewAfterQuestionActions(){
	var work_id = localStorage.getItem('work_id');
	var t_id = localStorage.getItem('t_id');
	var subject_id = localStorage.getItem('subject_id');
	$("#add-assignment").attr("data", subject_id);
	$('.objective-questions').html("");
	$('.subjective-questions').html("");
	$.ajax({
		url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/questions",
		type: "GET",
		dataType: "json",
		success: function(response){
			if(response.status===105){
				var all_questions = response.data.question;
				var all_option = response.data.option;
				var objective_questions = all_questions.filter((question, index, arr)=> question.option_id != null);
				var subjective_questions = all_questions.filter((question, index, arr)=> question.option_id == null);
				if(response.data.question.length===0){
					$("#content-empty-assignment-question").show();
					$("#content-class-assignment-question").hide();

				}else{
					$("#content-empty-assignment-question").hide();
					$("#content-class-assignment-question").show();
					var strObj, strSubj, ans;
					if(objective_questions.length!=0 && subjective_questions.length != 0){
						$(".objective-questions").show();
						$(".subjective-questions").show();
						strObj = '<table class="col-md-10">';
						strObj+='<thead><tr><th colspan = "3"><h2>Objective Questions</h2></th></tr><thead>';
						strObj+='<tbody>';
						var sn = 0;
						$.each(objective_questions, function(keyRow, valueRow){
							strObj+= '<tr style = "height:10px"><h3><td>'+(sn+1)+'</td><td>'+valueRow['question_title']+'</td></h3></tr> ';
							var objective_option = all_option[sn];
							sn+=1
								$.each(objective_option, function(key, value){
									if(value['id']==valueRow['option_id']){
										ans = value['label'];
									}
								strObj+='<tr><td class="col-md-1">'+value['label']+'</td><td class="col-md-10">'+value['opt']+'</td><td class="col-md-1"></td></tr>';
								});
							strObj+='<tr><td class="col-md-2">Correct Ans: </td><td class="col-md-9">'+ans+'</td><td class="col-md-1"></td></tr>';
							strObj+='<tr><td colspan = "3"><a data-toggle="modal" href="#askForQuestionDeleteModal" class="btn btn-sm btn-danger btn-flat pull-right delete-question" question-id = "'+valueRow['id']+'">Delete Question</a></td></tr>'
						});
						strObj+='</tbody></table>';
						strSubj = '<table class="col-md-10">';
						strSubj+='<thead><tr><th colspan = "3"><h2>Subjective Questions</h2></th></tr><thead>';
						strSubj+='<thead>';
						var sn = 0;
						//console.log(subjective_questions);
						$.each(subjective_questions, function(keyRow, valueRow){
							sn+=1
							strSubj+= '<tr><td>'+sn+'</td><td>'+valueRow['question_title']+'</td></tr> ';
							strSubj+='<tr><td colspan = "2"><a data-toggle="modal" href="#askForQuestionDeleteModal" class="btn btn-sm btn-danger btn-flat pull-right delete-question" question-id = "'+valueRow['id']+'">Delete Question</a></td></tr>'							
						});
						strSubj+='</tbody></table>';
						$('.objective-questions').append(strObj);
						$('.subjective-questions').append(strSubj);
					}//both objective and subjective

					if(objective_questions.length!=0 && subjective_questions.length == 0){
						$(".subjective-questions").hide();
						strObj = '<table class="col-md-10">';
						strObj+='<thead><tr><th colspan = "3"><h2>Objective Questions</h2></th></tr><thead>';
						strObj+='<tbody>';
						var sn = 0;
						$.each(objective_questions, function(keyRow, valueRow){
							strObj+= '<tr style = "height:10px"><h3><td>'+(sn+1)+'</td><td>'+valueRow['question_title']+'</td></h3></tr> ';
							var objective_option = all_option[sn];
							sn+=1
								$.each(objective_option, function(key, value){
									if(value['id']==valueRow['option_id']){
										ans = value['label'];
									}
								strObj+='<tr><td class="col-md-1">'+value['label']+'</td><td class="col-md-10">'+value['opt']+'</td><td class="col-md-1"></td></tr>';
								});
							strObj+='<tr><td class="col-md-2">Correct Ans: </td><td class="col-md-9">'+ans+'</td><td class="col-md-1"></td></tr>';
							strObj+='<tr><td colspan = "3"><a data-toggle="modal" href="#askForQuestionDeleteModal" class="btn btn-sm btn-danger btn-flat pull-right delete-question" question-id = "'+valueRow['id']+'">Delete Question</a></td></tr>'
						});
						strObj+='</tbody></table>';
						$('.objective-questions').append(strObj);

						
					}//objective only

					if(objective_questions.length==0 && subjective_questions.length != 0){
						$(".objective-questions").hide();
						strSubj = '<table class="col-md-10">';
						strSubj+='<thead><tr><th colspan = "3"><h2>Subjective Questions</h2></th></tr><thead>';
						strSubj+='<thead>';
						var sn = 0;
						$.each(subjective_questions, function(keyRow, valueRow){
							sn+=1
							strSubj+= '<tr><td>'+sn+'</td><td>'+valueRow['question_title']+'</td></tr> ';
							strSubj+='<tr><td colspan = "2"><a data-toggle="modal" href="#askForQuestionDeleteModal" class="btn btn-sm btn-danger btn-flat pull-right delete-question" question-id = "'+valueRow['id']+'">Delete Question</a></td></tr>'

							
						});
						strSubj+='</tbody></table>';
						$('.subjective-questions').append(strSubj);
					}//subjective only
				}
				//return;
			}
		}
	});
}


$("#addObjectiveQUestion").click(function(){
	count = 1;
	$//("#add-more-subjective-question").hide();
	$("#add-objective-exam-question").show();
	$("#content-empty-exam-question").hide();
	$("#content-class-exam-question").hide();
	$(".submit-final-question").hide();
});

$("#addSubjectiveQuestion").click(function(){
	count = 1;
	//$("#add-more-objective-question").hide();
	$("#add-subjective-exam-question").show();
	$("#content-empty-exam-question").hide();
	$("#content-class-exam-question").hide();
	$(".submit-final-question").hide();
});

$("#add-more-objective-question").click(function(){

	count+=1;
	var str = "";
	str += '<hr>'
	str+= '<div class=\"objective_form\">';
	str+= '<div class="form-group"><label for="question-title">Question title('+count+')</label><textarea class="form-control question-title" rows="3"></textarea></div>';
	str+= '<div class="form-group"><label for="objective-option">Option (a):</label><input type="radio" name="correct" value="a" checked><input type="text" class="form-control objective-option-a" placeholder="option one"></div>';
	str+= '<div class="form-group"><label for="objective-option">Option (b):</label><input type="radio" name="correct" value="b"><input type="text" class="form-control objective-option-b" placeholder="option two"></div>';
	str+= '<div class="form-group"><label for="objective-option">Option (c):</label><input type="radio" name="correct" value="c"><input type="text" class="form-control objective-option-c" placeholder="option three"></div>';
	str+= '<div class="form-group"><label for="objective-option">Option (d):</label><input type="radio" name="correct" value="d"><input type="text" class="form-control objective-option-d" placeholder="option four"></div>';                        
	str+= '<div class="form-group"><label for="objective-option">Weightage Mark:</label><input type="number" class="form-control weightage-mark" placeholder="Weightage mark"></div>';                        
	str+= '</div>';
	$(".main-objective-form").append(str);
});

$("#add-more-subjective-question").click(function(){

	count+=1;
	var str = "";
	str = '<hr>'
	str+= '<div class=\"subjective_form\">';
	str+= '<div class="form-group"><label for="question-title">Question title('+count+')</label><textarea class="form-control question-title" rows="3"></textarea></div>';
	str+= '<div class="form-group"><label for="">Weightage Mark:</label><input type="text" class="form-control weightage-mark" placeholder="Weightage mark"></div>';                        
	str+= '</div>';
	$(".main-subjective-form").append(str);
});


$("#addSubjectiveQuestion-modal").click(function(){
	count = 0;
	$("#objective-button").hide();
	$(".submit-subjective").hide();
	$("#askForSubjectiveModal").modal('hide');
	$("#addSubjectiveQuestion").click();
	$("#submit-subjective-question").hide();
	$(".submit-final-question").show();
});


$("#addObjectiveQuestion-modal").click(function(){
	count = 0;
	$("#subjective-button").hide();
	$(".submit-subjective").hide();
	$("#askForObjectiveModal").modal('hide');
	//$("#addSubjectiveQUestion").append("#addObjectiveQUestion");
	$("#addObjectiveQUestion").click();
	$("#submit-objective-question").hide();
	$(".submit-final-question").show();
});

$("#submit-subjective-question").click(function(){

	var t_id = localStorage.getItem('t_id');
	var subject_id = localStorage.getItem('subject_id');
	var work_id = localStorage.getItem('work_id');

	var subjective_json = $(".subjective_form").map(function(){
		var question = $(this).find(".question-title").val();
		var mark = $(this).find(".weightage-mark").val();
		if (ifBlank("Question-title", question) === false)
          return false;
      	if (ifBlank("Weightage Marks", mark) === false)
          return false;
		var data = {
			"question": question,
			"marks": mark
		}
		return data;
	}).get();
	$("#askForObjectiveModal").modal('hide');

	var value = {"subjective": subjective_json, "objective": ""};
	value = JSON.stringify(value);
	$.ajax({
		url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/questions",
		type: "POST",
		contentType: 'application/json',
		dataType: "json",
		data: value,
		success: function(response){
			console.log("success");
			viewAfterQuestionActions();
		}
	});
});

$("#submit-objective-question").click(function(){
	var t_id = localStorage.getItem('t_id');
	var subject_id = localStorage.getItem('subject_id');
	var work_id = localStorage.getItem('work_id');
	var obj =  $(".objective_form").map(function(){
		var question = $(this).find(".question-title").val();
		var answer = $('input[name=correct]:checked').val();
		var option_a = $(this).find(".objective-option-a").val();
		var option_b = $(this).find(".objective-option-b").val();
		var option_c = $(this).find(".objective-option-c").val();
		var option_d = $(this).find(".objective-option-d").val();
		var mark = $(this).find(".weightage-mark").val();
		if (ifBlank("Question-title", question) === false)
          return false;
      	if (ifBlank("Weightage Marks", mark) === false)
          return false;
      	if (ifBlank("Option (a)", option_a) === false)
          return false;
      	if (ifBlank("Option (b)", option_b) === false)
          return false;
      	if (ifBlank("Option (c)", option_c) === false)
          return false;
      	if (ifBlank("Option (d)", option_d) === false)
          return false;
	$("#askForSubjectiveModal").modal('hide');
		objective = {
			"question": question,
			"options": [
			{"label" : "a", "value" : option_a},
			{"label" : "b", "value" : option_b},
			{"label" : "c", "value" : option_c},
			{"label" : "d", "value" : option_d}
			],
			"mark": mark,
			"answer": answer
		};
		return objective;
	}).get();
	//obj = JSON.stringify(obj);
	var value = {"subjective": "", "objective": obj};
	value = JSON.stringify(value);
	$.ajax({
		url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/questions",
		type: "POST",
		contentType: 'application/json',
		dataType: "json",
		data: value,
		success: function(response){
			console.log(response);
			viewAfterQuestionActions();
		},
		error: function(err){
			console.log(err);
		}
	});

});

$(".submit-final-question").click(function(){
	var t_id = localStorage.getItem('t_id');
	var subject_id = localStorage.getItem('subject_id');
	var work_id = localStorage.getItem('work_id');

	var subjective_json = $(".subjective_form").map(function(){
		var question = $(this).find(".question-title").val();
		var mark = $(this).find(".weightage-mark").val();
		if (ifBlank("Question-title", question) === false)
          return false;
      	if (ifBlank("Weightage Marks", mark) === false)
          return false;
		var data_subjective = {
			"question": question,
			"marks": mark
		}
		return data_subjective;
	}).get();

	var objective_json = $(".objective_form").map(function(){
		var question = $(this).find(".question-title").val();
		var answer = $('input[name=correct]:checked').val();
		var option_a = $(this).find(".objective-option-a").val();
		var option_b = $(this).find(".objective-option-b").val();
		var option_c = $(this).find(".objective-option-c").val();
		var option_d = $(this).find(".objective-option-d").val();
		var mark = $(this).find(".weightage-mark").val();
		if (ifBlank("Question-title", question) === false)
          return false;
      	if (ifBlank("Weightage Marks", mark) === false)
          return false;
      	if (ifBlank("Option (a)", option_a) === false)
          return false;
      	if (ifBlank("Option (b)", option_b) === false)
          return false;
      	if (ifBlank("Option (c)", option_c) === false)
          return false;
      	if (ifBlank("Option (d)", option_d) === false)
          return false;
		var data_objective = {
			"question": question,
			"options": [
			{"label" : "a", "value" : option_a},
			{"label" : "b", "value" : option_b},
			{"label" : "c", "value" : option_c},
			{"label" : "d", "value" : option_d}
			],
			"mark": mark,
			"answer":answer
		}
		return data_objective;
		
	}).get();

	var value = {"subjective": subjective_json, "objective": objective_json};
	value = JSON.stringify(value);
	$.ajax({
		url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/questions",
		type: "POST",
		contentType: 'application/json',
		dataType: "json",
		data: value,
		success: function(response){
			console.log("success");
			$("#content-empty-exam-question").hide();
			$("#content-class-exam-question").hide();
			$("#add-objective-exam-question").hide();
			$("#add-subjective-exam-question").hide();
			viewAfterQuestionActions();		}
	});
});


$(document).delegate(".delete-exam", "click", function(){
	var work_id = $(this).attr('data');
	var subject_id = $(this).attr('subject_id');
	$.ajax({
		url: basepath+"/teachers/"+teacher_id+"/subjects/"+subject_id+"/works/"+work_id,
		type: "DELETE",
		dataType: "json",
		success: function(response){
			if(response.status===104){
				$('.view-exam').click();	
			}
		}
	});

});;

$(document).delegate(".delete-exam", "click", function(){
	var work_id = $(this).attr('data');
	var subject_id = $(this).attr('subject_id');
	$.ajax({
		url: basepath+"/teachers/"+teacher_id+"/subjects/"+subject_id+"/works/"+work_id,
		type: "DELETE",
		dataType: "json",
		success: function(response){
			if(response.status===104){
				$('.view-exam').click();	
			}
		}
	});

});;

$("#edit_exam_save").click(function(){
	var exam_title = $("#new-exam-title").val();
	var submit_date = $("#new-submit-date").val();
	var subject_id = $(this).attr("subject_id");
	var work_id = $(this).attr("work_id");
	if (ifBlank("Exam-title", exam_title) === false)
          return false;
      	if (ifBlank("Submit Date", submit_date) === false)
          return false;
	$.ajax({
		url: basepath+"/teachers/"+teacher_id+"/subjects/"+subject_id+"/works/"+work_id,
		type: "PUT",
		dataType: "json",
		data: {work_title: exam_title, submit_date: submit_date, work_type: "e"},
		success: function(response){
			if(response.status===104){
				$("#editExamModal").modal('hide');
				$('.view-exam').click();
				//$("#content-main-exam").show();
				//$("#content-empty-exam").hide();
			}
		}
	});
});

$(".back-to-veiw-detail").click(function(){
	$("#content-class-exam").show();
	$("#content-main-exam").hide();
	$("#content-empty-exam").hide();
});

$("#edit-teacher-profile").click(function(){
	if (teacher_details_info!="") {
		var fname = teacher_details_info[0]['fname'];
		var mname = teacher_details_info[0]['mname'];
		var lname = teacher_details_info[0]['lname'];
		var address = teacher_details_info[0]['address'];
		var contact = teacher_details_info[0]['contact'];
		var dob = teacher_details_info[0]['dob'];
		var join_date = teacher_details_info[0]['join_date'];
		var user_id = teacher_details_info[0]['user_id'];
		var id = teacher_details_info[0]['id'];
		$("#new-fname").val(fname);
		$("#new-mname").val(mname);
		$("#new-lname").val(lname);
		$("#new-address").val(address);
		$("#new-contact").val(contact);
		$("#new-dob").val(dob);
		$("#new-join-date").val(join_date);
	}
});

$("#add-exam").click(function(){
	var exam_title = $("#exam-title").val();
	var submit_date = $("#submit-date").val();
	if (ifBlank("Exam-title", exam_title) === false)
          return false;
      	if (ifBlank("Submit Date", submit_date) === false)
          return false;
	var subject_id = $(this).attr('data');
	$.ajax({
		url : basepath+"/teachers/"+teacher_id+"/subjects/"+subject_id+"/works",
		type: "POST",
		dataType: "json",
		data: {work_title: exam_title, submit_date: submit_date, work_type: 'e'},
		success: function(response){
			if(response.status===105){
				$("#addExamModal").modal('hide');
				$("#content-empty-exam").hide();
				$(".view-exam").click();
			}
		}
	});
});

$(document).delegate("#edit_teacher_profile_save", "click", function(){
	var id = teacher_details_info[0]['id'];
	var fname = $("#new-fname").val();
	var mname = $("#new-mname").val();
	var lname = $("#new-lname").val();
	var address = $("#new-address").val();
	var contact = $("#new-contact").val();
	var dob = $("#new-dob").val();
	var join_date = $("#new-join-date").val();
	if (ifBlank("First Name", fname) === false)
        return false;
    if (ifBlank("Address", address) === false)
        return false;
    if (ifBlank("Contact", contact) === false)
        return false;
    if (ifBlank("Date of Birth", dob) === false)
        return false;

	$.ajax({
		url: basepath+"/roles/3/teachers/"+id,
		type: "PUT",
		dataType: "json",
		data: {fname:fname, mname:mname, lname:lname, address:address, contacts:contact, dob:dob, join_date:join_date},
		success: function(response){
			teacher_details_info = [];
			$('#editTeacherProfileModal').modal('hide');
			teacherProfile();

		}
	});
});
});