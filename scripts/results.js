$(document).ready(function(){
	// $("#result-exam-body").hide();
	// $("#result-assignment-body").hide();
	// $("#view-assignment-answer-body").hide();
	// $("#view-exam-answer-body").hide();
	// $("#student-assignment-answer-body").hide();
	// $("#student-assignment-answer-details").hide();
	// $("#student-exam-answer-body").hide();
	// $("#student-exam-answer-details").hide();
	// $("#student-mark-submited").hide();
	// $("#view-assignment-published-result").hide();
	// $("#student-assignment-result-body").hide();	
	// $("#view-exam-published-result").hide();
	// $("#student-exam-result-body").hide();
	//$("#assignment-published-result-details").hide();

	var t_id = localStorage.getItem('t_id');

	function listSubjects(){

		$.ajax({
			url: basepath+ "/teachers/"+t_id+"/subjects",
			type: "get",
			dataType: "json",
			success: function(response){
				var data = response.data;
				var subjects = data.filter((subject, index)=>subject.class_id==c_id);
				var str;
				$.each(subjects, function(key, value){
					str+='<tr>';
					str+='<td> Grade'+value.grade+'</td>';
					str+='<td>'+value.subject+'</td>';
					str+='<td>';
					str+='<button data-id ="'+value.id+'" class="btn btn-sm btn-primary btn-flat pull-left assignment-results" style = "margin-right:5px;">Assignment Results</button>';
					str+='<button data-id ="'+value.id+'" class="btn btn-sm btn-primary btn-flat pull-left exam-results" style = "margin-left:5px;">Exams Results</button>';
					str+='</td>';
					str+='</tr>';
				});

				$("#table-subject-result").append(str);
			}
		});
	}

	function listWorks(work_type){
		var subject_id = localStorage.getItem("subject_id");
		$.ajax({
			url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works",
			type: "get",
			dataType: 'json',
			success: function(response){
				var data = response.data;
				var works = data.filter((work, index)=>work.work_type==work_type);
				localStorage.setItem("work_details", JSON.stringify(works));
			},
			error: function(err){
				console.log(err);
			}
		});
	}

	function getStudents(work_id, work_type){
		$.ajax({
			url: basepath+"/roles/2/classes/"+c_id+"/students",
			type: "GET",
			dataType: "json",
			success: function(response){
				var data = response.data;
				var all_students = data.filter((student, index)=>student.class_id==c_id);
				var str = "";
				$.each(all_students, function(keyRow, valueRow){
					var fname = valueRow.fname;
					var lname = valueRow.lname;
					var mname = valueRow.mname;
					if(mname==null)
						mname = "";
					if(lname==null)
						lname = "";
					var fullname = fname + " " + mname + " " + lname;
					let student_id = valueRow.id;
					str+='<tr>';
					str+='<td>'+fullname+'</td>';
					str+='<td><button work-id = "'+work_id+'" data-id ="'+student_id+'" class="btn btn-sm btn-primary btn-flat pull-left view-'+work_type+'-answer-details" style = "margin-left:5px;">View Answer</button></td>';					
					str+='</tr>';
				});

				$("#table-"+work_type+"-student-answer").html(str);
			}
		});
	}

	function getStudentsResult(work_id, work_type){
		$.ajax({
			url: basepath+"/roles/2/classes/"+c_id+"/students",
			type: "GET",
			dataType: "json",
			success: function(response){
				var data = response.data;
				var all_students = data.filter((student, index)=>student.class_id==c_id);
				
				$.each(all_students, function(keyRow, valueRow){
					var str = "";
					var fname = valueRow.fname;
					var lname = valueRow.lname;
					var mname = valueRow.mname;
					if(mname==null)
						mname = "";
					if(lname==null)
						lname = "";
					var fullname = fname + " " + mname + " " + lname;
					let student_id = valueRow.id;
						subject_id = localStorage.getItem('subject_id');

					$.ajax({
						url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/students/"+student_id+"/results",
						type: "get",
						dataType: "json",
						success: function(nextResponse){
							console.log(nextResponse.data);
							let nextData = nextResponse.data;
							str+='<tr>';
							str+='<td>'+fullname+'</td>';
							str+='<td>'+nextData[0].obtained_marks+'</td>';
							//str+='<td><button work-id = "'+work_id+'" data-id ="'+student_id+'" class="btn btn-sm btn-primary btn-flat pull-left view-assignment-answer-details" style = "margin-left:5px;">View Answer</button></td>';					
							str+='</tr>';
							$(work_type).append(str);
						}
					});
				});				
			}
		});
	}

	function allSubjects(){
		var subject_id = localStorage.getItem('subject_id');

		$.ajax({
			url: basepath+"/teachers/"+t_id+"/subjects",
			type: "get",
			dataType: "json",
			success: function(response){
				var data = response.data;
				var subject_data = data.filter((subject, index)=>subject.id==subject_id);
			}
		});
	}

	function allResult(work_id){
		var subject_id = localStorage.getItem("subject_id");
		$.ajax({
			url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/results",
			type: "GET",
			dataType: "json",
			success: function(response){
				var data  = response.data;
				//var result = data.filter((result, index)=> result.)
			}
		});
	}

	listSubjects();

	$(document).delegate(".assignment-results", "click", function(){
		$("#result-subject-body").hide();
		$("#result-exam-body").hide();
		$("#result-assignment-body").show();
		console.log("assignment");
		var subject_id = $(this).attr('data-id');
		localStorage.setItem("subject_id", subject_id);
		listWorks("h");

	});


	$(document).delegate(".exam-results", "click", function(){
		$("#result-subject-body").hide();
		$("#result-assignment-body").hide();
		$("#result-exam-body").show();
		var subject_id = $(this).attr('data-id');
		localStorage.setItem("subject_id", subject_id);
		listWorks("e");
	});

	$(".published-assignment-results").click(function(){
		$("#result-exam-body").hide();
		$("#result-assignment-body").hide();
		$("#view-assignment-published-result").show();
		let work_ids = [];
			work_id = localStorage.getItem("work_details");
			work_id = JSON.parse(work_id);
			str = " ";

		$.each(work_id, function(keyRow, valueRow){
			str+='<tr>';
			str+='<td>'+valueRow.work_title+'</td>';
			str+='<td>'+valueRow.create_date+'</td>';
			str+='<td>'+valueRow.submit_date+'</td>';
			str+='<td>';
			str+='<button data-id ="'+valueRow.id+'" class="btn btn-sm btn-primary btn-flat pull-left assignment-published-result-details" style = "margin-right:5px;">Details</button>';
			str+='</td>';
			str+='</tr>';
			work_ids.push(valueRow.id);
		});
		$("#table-assignment-published-result").append(str);
		console.log(work_ids);
		//allResult(work_ids);
	});

	$(".published-exam-results").click(function(){
		$("#result-exam-body").hide();
		$("#result-assignment-body").hide();
		$("#view-exam-published-result").show();
		let work_ids = [];
			work_id = localStorage.getItem("work_details");
			work_id = JSON.parse(work_id);
			str = " ";

		$.each(work_id, function(keyRow, valueRow){
			str+='<tr>';
			str+='<td>'+valueRow.work_title+'</td>';
			str+='<td>'+valueRow.create_date+'</td>';
			str+='<td>'+valueRow.submit_date+'</td>';
			str+='<td>';
			str+='<button data-id ="'+valueRow.id+'" class="btn btn-sm btn-primary btn-flat pull-left exam-published-result-details" style = "margin-right:5px;">Details</button>';
			str+='</td>';
			str+='</tr>';
			work_ids.push(valueRow.id);
		});
		$("#table-exam-published-result").append(str);
		console.log(work_ids);
	});

	$(document).delegate(".assignment-published-result-details", "click", function(){
		console.log("i am clicked...");
		$("#student-assignment-result-body").show();
		$("#view-assignment-published-result").hide();
		let work_id = $(this).attr('data-id');
			work_type = '#table-assignment-student-result';
		localStorage.setItem("work_id", work_id);
		getStudentsResult(work_id, work_type);
	});

	$(document).delegate(".exam-published-result-details", "click", function(){
		console.log("i am clicked...");
		$("#student-exam-result-body").show();
		$("#view-exam-published-result").hide();
		let work_id = $(this).attr('data-id');
			work_type = '#table-exam-student-result';
		localStorage.setItem("work_id", work_id);
		getStudentsResult(work_id, work_type);
	});

	$(".suppress-assignment-results").click(function(){
		var work_ids = [];
		var work_id = localStorage.getItem("work_details");
			work_id = JSON.parse(work_id);
		$.each(work_id, function(keyRow, ValueRow){
			work_ids.push(ValueRow.id);
		});
		//allResult(work_ids);
	});


	$(".view-assignment-answers").click(function(){
		$("#result-exam-body").hide();
		$("#result-assignment-body").hide();
		$("#view-assignment-answer-body").show();
		$("#view-exam-answer-body").hide();

		var work_ids = [];

		var work_id = localStorage.getItem("work_details");
			work_id = JSON.parse(work_id);
		var str = " ";

		$.each(work_id, function(keyRow, valueRow){
			str+='<tr>';
			str+='<td>'+valueRow.work_title+'</td>';
			str+='<td>'+valueRow.create_date+'</td>';
			str+='<td>'+valueRow.submit_date+'</td>';
			str+='<td>';
			str+='<button data-id ="'+valueRow.id+'" class="btn btn-sm btn-primary btn-flat pull-left assignment-answer-details" style = "margin-right:5px;">Details</button>';
			str+='</td>';
			str+='</tr>';

			work_ids.push(valueRow.id);
		});
		$("#table-assignment-answer").append(str);
	});

	$(".view-exam-answers").click(function(){
		$("#result-exam-body").hide();
		$("#result-assignment-body").hide();
		$("#view-exam-answer-body").show();
		$("#view-assignment-answer-body").hide();

		var work_ids = [];

		var work_id = localStorage.getItem("work_details");
			work_id = JSON.parse(work_id);
		var str = " ";

		$.each(work_id, function(keyRow, valueRow){
			str+='<tr>';
			str+='<td>'+valueRow.work_title+'</td>';
			str+='<td>'+valueRow.create_date+'</td>';
			str+='<td>'+valueRow.submit_date+'</td>';
			str+='<td>';
			str+='<button data-id ="'+valueRow.id+'" class="btn btn-sm btn-primary btn-flat pull-left exam-answer-details" style = "margin-right:5px;">Details</button>';
			str+='</td>';
			str+='</tr>';

			work_ids.push(valueRow.id);
		});
		$("#table-exam-answer").append(str);
	});

	$(document).delegate(".assignment-answer-details", "click", function(){
		$("#result-exam-body").hide();
		$("#result-assignment-body").hide();
		$("#view-assignment-answer-body").hide();
		$("#view-exam-answer-body").hide();
		$("#student-exam-answer-body").hide();
		$("#student-assignment-answer-body").show();
		var work_id = $(this).attr('data-id');
		localStorage.setItem("work_id", work_id);
		getStudents(work_id, "assignment");

	});

	$(document).delegate(".exam-answer-details", "click", function(){
		$("#result-exam-body").hide();
		$("#result-assignment-body").hide();
		$("#view-assignment-answer-body").hide();
		$("#view-exam-answer-body").hide();
		$("#student-assignment-answer-body").hide();
		$("#student-exam-answer-body").show();
		var work_id = $(this).attr('data-id');
		localStorage.setItem("work_id", work_id);
		getStudents(work_id, "exam");

	});

	function exam_answer_details(work_id){
		$("#result-exam-body").hide();
		$("#result-assignment-body").hide();
		$("#view-assignment-answer-body").hide();
		$("#view-exam-answer-body").hide();
		$("#student-exam-answer-body").show();
		$("#student-assignment-answer-body").hide();
		getStudents(work_id, "exam");
	}

	function assignment_answer_details(work_id){
		$("#result-exam-body").hide();
		$("#result-assignment-body").hide();
		$("#view-assignment-answer-body").hide();
		$("#view-exam-answer-body").hide();
		$("#student-assignment-answer-body").show();
		$("#student-mark-submited").hide();
		$("#student-exam-answer-body").hide();
		console.log('assignment_answer_details');
		getStudents(work_id, "assignment");
	}

	$(document).delegate(".view-assignment-answer-details", "click", function(){
		$("#student-assignment-answer-body").hide();
		$("#student-assignment-answer-details").show();
		var subject_id = localStorage.getItem("subject_id");
		var work_id = $(this).attr('work-id');
		var student_id = $(this).attr('data-id');
		localStorage.setItem('student_id', student_id);
		let question_details = [];

		var getQuestions = $.ajax({
								url: basepath+ "/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/questions",
								type: "GET",
								dataType: "json"
							}),
			getAnswers   = getQuestions.then(function(response){
								
								let question_title_details = [];
									question_mark_details = [];
									question_id_details = [];
									questions = response.data.question;
									subquestion = questions.filter((question, index)=>question.question_type=='s');
								
							 	$.each(subquestion, function(key, value){
									question_id_details.push(value.id);
									question_title_details.push(value.question_title);
									question_mark_details.push(value.weightage_marks);
								});

								let data = {
									"q_id": question_id_details,
									"question": question_title_details,
									"mark": question_mark_details
									}

								question_details.push(data);
								//question_details = JSON.stringify(question_details);									


								return $.ajax({
									url: basepath+"/students/"+student_id+"/classes/"+c_id+"/answers",
									type: "GET",
									dataType: "json"
								});
							});

			getAnswers.done(function(response){
				var data = response.data;
				var str = " ";
				let question_id_array = question_details[0].q_id;
					question_array = question_details[0].question;
					mark_array = question_details[0].mark;
					sub_question_array = data.filter((question, index)=>question.weightage_marks==null);
					answer_array = [];
					count = 0;

					if(sub_question_array==0){
						$("#student-mark-submited").show();
						$(".back-student-exam-list").hide();
						$("#student-assignment-answer-details").hide();
						return false;
					}
				$.each(sub_question_array, function(keyRow, valueRow){
					answer_array.push(valueRow.answer);
				});

				//question_id_array = JSON.parse(question_id_array);
				console.log(answer_array);

				$.each(question_id_array, function(keyRow, valueRow){
					str+='<tr>';
					str+='<td>';
					str+='<form class="question-answer">';
					str+='<div class="form-group">';
					str+='<label for="question">Questions:</label>';
					str+='<input type="text" class="form-control question" data-id = "'+valueRow+'" value="'+question_array[count]+'" readonly="true">';
					str+='</div>';
					str+='<div class="form-group">';
					str+='<label for="answer">Answer:</label>';
					str+='<textarea class="form-control answer" readonly="true" rows="8">'+answer_array[count]+'</textarea>';
					//str+='<input type="text" class="form-control" id="question" value="'+answer_array[count]+'" readonly="true">';
					str+='</div>';
					str+='<div class="form-group">';
					str+='<label for="mark">Weightage Mark:</label>';
					str+='<input type="number" class="form-control weightage-mark" value="'+mark_array[count]+'" readonly="true">';
					str+='</div>';
					str+='<div class="form-group">';
					str+='<label for="mark">Socred Marks:</label>';
					str+='<input type="number" class="form-control scored-mark">';
					str+='</div>';
					// str+='<button class="btn btn-default submit-mark">Submit</button>';
					str+='</form>';
					str+='</td>';
					str+='</tr>';
					count+=1;
				});

				$("#table-assignment-student-answer-details").append(str);;


				console.log(response);
			});
	});


$(document).delegate(".view-exam-answer-details", "click", function(){
		$("#student-exam-answer-body").hide();
		$("#student-exam-answer-details").show();
		var subject_id = localStorage.getItem("subject_id");
		var work_id = $(this).attr('work-id');
		var student_id = $(this).attr('data-id');
		localStorage.setItem('student_id', student_id);
		let question_details = [];

		var getQuestions = $.ajax({
								url: basepath+ "/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/questions",
								type: "GET",
								dataType: "json"
							}),
			getAnswers   = getQuestions.then(function(response){
								
								let question_title_details = [];
									question_mark_details = [];
									question_id_details = [];
									questions = response.data.question;
									subquestion = questions.filter((question, index)=>question.question_type=='s');
								
							 	$.each(subquestion, function(key, value){
									question_id_details.push(value.id);
									question_title_details.push(value.question_title);
									question_mark_details.push(value.weightage_marks);
								});

								let data = {
									"q_id": question_id_details,
									"question": question_title_details,
									"mark": question_mark_details
									}

								question_details.push(data);
								//question_details = JSON.stringify(question_details);									


								return $.ajax({
									url: basepath+"/students/"+student_id+"/classes/"+c_id+"/answers",
									type: "GET",
									dataType: "json"
								});
							});

			getAnswers.done(function(response){
				var data = response.data;
				var str = " ";
				let question_id_array = question_details[0].q_id;
					question_array = question_details[0].question;
					mark_array = question_details[0].mark;
					sub_question_array = data.filter((question, index)=>question.weightage_marks==null);
					answer_array = [];
					count = 0;
					console.log("----------------------");
					console.log(question_id_array);
					console.log("----------------------");

					if(sub_question_array==0){
						$("#student-mark-submited").show();
						$(".back-student-assignment-list").hide();
						$("#student-exam-answer-details").hide();
						return false;
					}
				$.each(sub_question_array, function(keyRow, valueRow){
					answer_array.push(valueRow.answer);
				});

				//question_id_array = JSON.parse(question_id_array);
				console.log(answer_array);

				$.each(question_id_array, function(keyRow, valueRow){
					console.log("question id: ");
					console.log(valueRow);
					str+='<tr>';
					str+='<td>';
					str+='<form class="exam-question-answer">';
					str+='<div class="form-group">';
					str+='<label for="question">Questions:</label>';
					str+='<input type="text" class="form-control exam-question" data-id = "'+valueRow+'" value="'+question_array[count]+'" readonly="true">';
					str+='</div>';
					str+='<div class="form-group">';
					str+='<label for="answer">Answer:</label>';
					str+='<textarea class="form-control exam-answer" readonly="true" rows="8">'+answer_array[count]+'</textarea>';
					//str+='<input type="text" class="form-control" id="question" value="'+answer_array[count]+'" readonly="true">';
					str+='</div>';
					str+='<div class="form-group">';
					str+='<label for="mark">Weightage Mark:</label>';
					str+='<input type="number" class="form-control exam-weightage-mark" value="'+mark_array[count]+'" readonly="true">';
					str+='</div>';
					str+='<div class="form-group">';
					str+='<label for="mark">Socred Marks:</label>';
					str+='<input type="number" class="form-control exam-scored-mark">';
					str+='</div>';
					// str+='<button class="btn btn-default submit-mark">Submit</button>';
					str+='</form>';
					str+='</td>';
					str+='</tr>';
					count+=1;
				});

				$("#table-exam-student-answer-details").append(str);;


				console.log(response);
			});
	});

	$("#submit-assignment-mark").click(function(){
		console.log("here...");
		let work_id = localStorage.getItem('work_id');
		let student_id = localStorage.getItem('student_id');
		let subject_id = localStorage.getItem('subject_id');
		let answers = $(".question-answer").map(function(){
			let question_id = $(this).find(".question").attr('data-id');
			let answer = $(this).find(".answer").val();
			let weightage_mark = $(this).find(".weightage-mark").val();
			let scored_mark = $(this).find(".scored-mark").val();

			if(scored_mark>weightage_mark)
				return false;

			let submit_score = {
				"question_id": question_id,
				"mark": scored_mark
			}
			return submit_score;
		}).get();

		let count = 0;
		$.each(answers, function(keyRow, valueRow){
			console.log('keyrow: '+keyRow);
			let q_id = valueRow.question_id;
				mark = valueRow.mark;

			$.ajax({
				url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/questions/"+q_id+"/studentanswers/"+student_id,
				type: 'PUT',
				dataType: 'json',
				data: {weightage_marks: mark},
				success: function(response){
					count+=1;
					if(answers.length==count){
						console.log('i am here...');
						var result = $.ajax({
										url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/students/"+student_id+"/results",
										type: 'POST',
										dataType: 'json'
									});
						result.done(function(response){
							console.log(response);
							});
						result.fail(function(err){
							console.log(err);
						});
					}
				},
				error: function(err){
					console.log(err);
				}
			});
		});
		console.log(answers);
	});

$("#submit-exam-mark").click(function(){
		console.log("here...");
		let work_id = localStorage.getItem('work_id');
		let student_id = localStorage.getItem('student_id');
		let subject_id = localStorage.getItem('subject_id');
		let answers = $(".exam-question-answer").map(function(){
			let question_id = $(this).find(".exam-question").attr('data-id');
			let answer = $(this).find(".exam-answer").val();
			let weightage_mark = $(this).find(".exam-weightage-mark").val();
			let scored_mark = $(this).find(".exam-scored-mark").val();

			if(scored_mark>weightage_mark)
				return false;

			let submit_score = {
				"question_id": question_id,
				"mark": scored_mark
			}
			return submit_score;
		}).get();

		console.log(answers);

		let count = 0;
		$.each(answers, function(keyRow, valueRow){
			console.log('keyrow: '+keyRow);
			let q_id = valueRow.question_id;
				mark = valueRow.mark;

			$.ajax({
				url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/questions/"+q_id+"/studentanswers/"+student_id,
				type: 'PUT',
				dataType: 'json',
				data: {weightage_marks: mark},
				success: function(response){
					count+=1;
					if(answers.length==count){
						console.log('i am here...');
						var result = $.ajax({
										url: basepath+"/teachers/"+t_id+"/subjects/"+subject_id+"/works/"+work_id+"/students/"+student_id+"/results",
										type: 'POST',
										dataType: 'json'
									});
						result.done(function(response){
							console.log(response);
						});

						result.fail(function(err){
							console.log(err);
						});
					}
				},
				error: function(err){
					console.log(err);
				}
			});
		});
		console.log(answers);
	});

	$(".back-student-assignment-list").click(function(){
		let work_id = localStorage.getItem('work_id');
		console.log('assignment here');
		assignment_answer_details(work_id);
	});

	$("#back-student-exam-list").click(function(){
		let work_id = localStorage.getItem('work_id');
		exam_answer_details(work_id);
	});

});