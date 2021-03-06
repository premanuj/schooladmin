$(document).ready(function(){
	listClasses();
	listTeachers();
	$('#section-subject-content').hide();
	var section_details = [];
	var subject_details = [];
	var class_details = [];
	var teacher_details = [];
	var subject_teacher_detail = [];
	//listClasses();
	var classInfo = function(){
		$.ajax({
			url : basepath + "/classes",
			type : 'GET',
			dataType: 'json',
			success : function(response){
				if(response.status===105){
					$.each(response.data,function(keyRow, valueRow){
						var grade = valueRow['grade'];
						var class_id = valueRow['id'];
						var json = {
							"id": class_id,
							"grade" : grade
						}
						class_details.push(json);

					});
					sectionInfo();
				}else{
					console.log('something wrong');
				}
			}
		});
	}

	var sectionInfo = function(){
		$.ajax({
			url : basepath+"/classes/sections",
			type : "GET",
			dataType: "json",
			success: function(response){
				if (response.status===105) {
					$.each(response.data, function(keyRow, valueRow){
						var id = valueRow['id'];
						var class_id = valueRow['class_id'];
						var section = valueRow['section'];
						var json = {
							"id": id,
							"class_id" : class_id,
							"section" : section
						}
						section_details.push(json);

					});
					subjectInfo();
				}else{
					console.log('something wrong');
				}
			}
		});
	};

	var subjectInfo = function(){
		$.ajax({
			url : basepath+"/classes/subjects",
			type : "GET",
			dataType: "json",
			success: function(response){
				if (response.status===105) {
					$.each(response.data, function(keyRow, valueRow){
						var id = valueRow['id'];
						var class_id = valueRow['class_id'];
						var subject = valueRow['subject'];
						var teacher_id = valueRow['teacher_id'];
						var json = {
							"id": id,
							"class_id" : class_id,
							"subject" : subject,
							"teacher_id": teacher_id
						}
						subject_details.push(json);

					});
					classDisplay();
				}else{
					console.log('something wrong');
				}
			}
		});
	}

	var classDisplay = function(){
		console.log('classDisplay');
		if(class_details){
			var str;
			$.each(class_details, function(keyRow, valueRow){
				//console.log(valueRow);
				//console.log(section_details);
				var class_id = valueRow['id'];
				var grade = valueRow['grade'];
				//console.log(class_id);
				var no_of_sections = section_details.filter((section)=>section.class_id === class_id);
				var no_of_subjects = subject_details.filter((subject)=>subject.class_id === class_id);
				//console.log(section_details);
				str+= '<tr class="row-classes">';						
				str+='<td class="col-class">'+grade+ '</td>';
				str+='<td class="col-section">'+no_of_sections.length+'</td>';
				str+='<td class="col-section">'+no_of_subjects.length+'</td>';
				str+='<td class="col-details"><a class="btn btn-sm btn-primary btn-flat pull-left view-class-detail" data = "'+class_id+'" grade = "'+grade+'">View Details</a></td>';
				str+='</tr>';
				
			});
			$("#body-classes").html(str);
			teacherInfo();
		}
	}

	var teacherInfo = function(){
		$.ajax({
			url: basepath+"/roles/3/teachers",
			type: "GET",
			dataType: "json",
			success: function(response){
				if (response.status===105) {
					$.each(response.data, function(keyRow, valueRow){

						var id = valueRow['id'];
						var fname = valueRow['fname'];
						var mname = valueRow['mname'];
						var lname = valueRow['lname'];
						var json = {
							"id":  id,
							"fname": fname,
							"mname": mname,
							"lname" : lname
						}
						teacher_details.push(json);
					});
				}
			}
		});
	}

	classInfo();

	function viewClassDetail(class_id){
		console.log("1: "+class_id);
		$.ajax({
			url : basepath+"/classes/sections",
			type : "GET",
			dataType: "json",
			success: function(response){
				if (response.status===105) {
					section_details = [];
					$.each(response.data, function(keyRow, valueRow){
						var id = valueRow['id'];
						var class_id = valueRow['class_id'];
						var section = valueRow['section'];
						var json = {
							"id": id,
							"class_id" : class_id,
							"section" : section
						}
						section_details.push(json);
					});
					$.ajax({
						url : basepath+"/classes/subjects",
						type : "GET",
						dataType: "json",
						success: function(response){
							if (response.status===105) {
								subject_details = [];
								$.each(response.data, function(keyRow, valueRow){
									var id = valueRow['id'];
									var class_id = valueRow['class_id'];
									var subject = valueRow['subject'];
									var teacher_id = valueRow['teacher_id'];
									var json = {
										"id": id,
										"class_id" : class_id,
										"subject" : subject,
										"teacher_id": teacher_id
									}
									subject_details.push(json);
								});
								var strSection = " ";
								var strSubject = " ";
								console.log("4) "+class_id);
								var filter_sections = section_details.filter((section, index, arr)=>section.class_id == class_id);
								console.log("--class details----");
								console.log(class_details);
								var filter_grades = class_details.filter((grade, index, arr)=>grade.id == class_id);
								console.log("filter_grades "+filter_grades.length);
								console.log("filter_sections "+filter_sections.length);
								$('#class-header').html('Class '+filter_grades[0].grade + ' Details');
								$('#class-content').hide();
								$('#section-subject-content').show();
								$.each(filter_sections, function(keyRow, valueRow){
									var sections = valueRow['section'];
									var section_id = valueRow['id'];
									strSection+= '<tr class="row-classes">';						
									strSection+='<td class="col-class">'+sections+ '</td>';
									strSection+='<td class="col-details"><a data-toggle="modal" href="#editSectionModal" class="btn btn-sm btn-primary btn-flat pull-left edit-section-detail" section-data = "'+section_id+'">Edit</a></td>';
									strSection+='<td class="col-details"><a class="btn btn-sm btn-primary btn-flat pull-left delete-section-detail" section-data = "'+section_id+'">Delete</a></td>';
									strSection+='</tr>';
								});
								var filter_subjects = subject_details.filter((subject)=>subject.class_id == class_id);
								$.each(filter_subjects, function(keyRow, valueRow){
									var subjects = valueRow['subject'];
									var subject_id = valueRow['id'];
									var teacher_id = valueRow['teacher_id'];
									strSubject+= '<tr class="row-classes">';						
									strSubject+='<td class="col-class">'+subjects+ '</td>';
									strSubject+='<td class="col-details"><a data-toggle="modal" href="#editSubjectModal" class="btn btn-sm btn-primary btn-flat pull-left edit-subject-detail" subject-data = "'+subject_id+'" teacher-data = "'+teacher_id+'">Edit</a></td>';
									strSubject+='<td class="col-details"><a data-toggle="modal" href="#deleteSubjectModal" class="btn btn-sm btn-primary btn-flat pull-left delete-subject-detail" subject-data = "'+subject_id+'">Delete</a></td>';
									strSubject+='</tr>';
								});

								$('#body-section').html(strSection);
								$('#body-subject').html(strSubject);
								$('#add-section').attr("section-data", class_id);
								$('#add-subject').attr("subject-data", class_id);
							}else{
								console.log('something wrong');
							}
						}
					});
				}else{
					console.log('something wrong');
				}
			}
		});
		
		
	}

	$('#grade_register').click(function(){
		var grade = $('#grade').val();
		$.ajax({
			url: basepath+"/classes",
			type: 'POST',
			dataType: 'json',
			data: {grade: grade},
			success: function(response){
				if (response.status===105) {
					$('#addModal').modal('hide');
					section_details = [];
					subject_details = [];
					class_details = [];
					teacher_details = [];
					classInfo();
				}
			}
		});
	});
	
	$(document).delegate(".view-class-detail", "click", function () {
		//subjectInfo();
		var class_id = $(this).attr("data");
		var grade = $(this).attr("grade");
		var strSection, strSubject;
		$('#class-header').html('Class '+grade + ' Details');
		$('#class-content').hide();
		$('#section-subject-content').show();
		var filter_sections = section_details.filter((section, index, arr)=>section.class_id == class_id);
		$.each(filter_sections, function(keyRow, valueRow){
			var sections = valueRow['section'];
			var section_id = valueRow['id'];
			strSection+= '<tr class="row-classes">';						
			strSection+='<td class="col-class">'+sections+ '</td>';
			strSection+='<td class="col-details"><a data-toggle="modal" href="#editSectionModal" class="btn btn-sm btn-primary btn-flat pull-left edit-section-detail" section-data = "'+section_id+'">Edit</a></td>';
			strSection+='<td class="col-details"><a class="btn btn-sm btn-primary btn-flat pull-left delete-section-detail" section-data = "'+section_id+'">Delete</a></td>';
			strSection+='</tr>';
		});
		var filter_subjects = subject_details.filter((subject)=>subject.class_id == class_id);
		$.each(filter_subjects, function(keyRow, valueRow){
			var subjects = valueRow['subject'];
			var subject_id = valueRow['id'];
			var teacher_id = valueRow['teacher_id'];
			strSubject+= '<tr class="row-classes">';						
			strSubject+='<td class="col-class">'+subjects+ '</td>';
			strSubject+='<td class="col-details"><a data-toggle="modal" href="#editSubjectModal" class="btn btn-sm btn-primary btn-flat pull-left edit-subject-detail" subject-data = "'+subject_id+'" teacher-data = "'+teacher_id+'">Edit</a></td>';
			strSubject+='<td class="col-details"><a data-toggle="modal" href="#deleteSubjectModal" class="btn btn-sm btn-primary btn-flat pull-left delete-subject-detail" subject-data = "'+subject_id+'">Delete</a></td>';
			strSubject+='</tr>';
		});

		$('#body-section').html(strSection);
		$('#body-subject').html(strSubject);
		$('#add-section').attr("section-data", class_id);
		$('#add-subject').attr("subject-data", class_id);
		
	});

$(document).delegate(".edit-section-detail", "click", function () {
	var section_id = $(this).attr('section-data');
	var filter_sections = section_details.filter((section, index, arr)=>section.id == section_id);
	var class_id = filter_sections[0]['class_id'];
	var section = filter_sections[0]['section'];
	var section_id = filter_sections[0]['id'];
	$("#old-section").val(filter_sections[0]['section']);
	$("#edit_section").click(function(){
		section = $('#old-section').val();
		$.ajax({
			url: basepath+"/classes"+class_id+"/sections/"+section_id,
			type: "PUT",
			dataType: "json",
			data: {section: section, class_id:class_id, section_id:section_id},
			success: function(){
				$("#editSectionModal").modal('hide');
				section_details = [];
				subject_details = [];
				class_details = [];
				teacher_details = [];
				classInfo();
				$('#section-subject-content').show();

			}
		});
	});

});

$(document).delegate(".delete-section-detail", "click", function () {

	var section_id = $(this).attr('section-data');
	var filter_sections = section_details.filter((section, index, arr)=>section.id == section_id);
	var class_id = filter_sections[0]['class_id'];
	console.log(section_id);
	$.ajax({
			url: basepath+"/classes/"+class_id+"/sections/"+section_id,
			type: "DELETE",
			dataType: "json",
			success: function(){
				$("#deleteSectiionModal").modal('hide');
				viewClassDetail(class_id);
			}
		});

});

$(document).delegate(".edit-subject-detail", "click", function () {
	var subject_id = $(this).attr('subject-data');
	var teacher_id = $(this).attr('teacher-data');
	console.log(teacher_id);
	var filter_subjects = subject_details.filter((subject, index, arr)=>subject.id == subject_id);
	var class_id = filter_subjects[0]['class_id'];
	var subject = filter_subjects[0]['section'];
	var subject_id = filter_subjects[0]['id'];
	$.ajax({
		url: basepath+"/teachers",
		type: "GET",
		dataType: "json",
		success: function(response){
			if(response.status===105){
				let data = response.data;
				//var filter_teachers = data.filter((teacher, index, arr)=>teacher.id == teacher_id);
				var str;
				$.each(data, function(keyRow, valueRow){
					var all_fname = valueRow['fname'];
					var all_mname = valueRow['mname'];
					var all_lname = valueRow['lname'];
					var all_teacher_id = valueRow['id'];
					console.log('all_teacher_id'+all_teacher_id);
					if (all_mname===null) {
						all_mname = "";
					}
					if(all_teacher_id==teacher_id){
						console.log(all_teacher_id+" here");
						str += '<option value = "'+valueRow['id']+'" selected >'+all_fname+' ' +all_mname+''+all_lname+'</option>';
					}
					str += '<option value = "'+valueRow['id']+'" >'+all_fname+' ' +all_mname+''+all_lname+'</option>';
				});
				//$("#teacher_id").val(teacher_name);
				$("#teacher_id").html(str);
				$("#old-subject").val(filter_subjects[0]['subject']);
				$("#edit_subject").attr('subject_id', subject_id);
				$("#edit_subject").attr('class_id', class_id);
			}
		}
	});
});

	$("#edit_subject").click(function(){
		console.log('here');
		var subject = $('#old-subject').val();
		var teacher = $('#teacher_id').val();
		var subject_id = $(this).attr('subject_id');
		var class_id = $(this).attr('class_id');
		console.log('subject: '+subject +' teacher: '+teacher+' subject_id: '+subject_id+' class_id: '+class_id);
		console.log('Teacher id '+teacher)
		$.ajax({
			url: basepath+"/classes/"+class_id+"/subjects/"+subject_id,
			type: "PUT",
			dataType: "json",
			data: {class_id:class_id, teacher_id:teacher, subject:subject},
			success: function(){
				$("#editSubjectModal").modal('hide');
				section_details = [];
				subject_details = [];
				teacher_details = [];
				viewClassDetail(class_id);
				console.log('inside success');
				//classInfo();
				//$('#section-subject-content').show();

			},
			error: function(err){
				console.log(err);
			}
		});
	});

$(document).delegate(".delete-subject-detail", "click", function () {
	var subject_id = $(this).attr('subject-data');
	$("#delete_subject").attr('subject_id', subject_id);
});

$("#delete_subject").click(function(){
	let subject_id = $(this).attr('subject_id');
	var filter_subjects = subject_details.filter((subject, index, arr)=>subject.id == subject_id);
	var class_id = filter_subjects[0]['class_id'];
		$.ajax({
			url: basepath+"/classes/"+class_id+"/subjects/"+subject_id,
			type: "DELETE",
			dataType: "json",
			success: function(){
				$("#deleteSubjectModal").modal('hide');
				section_details = [];
				subject_details = [];
				//class_details = [];
				teacher_details = [];
				viewClassDetail(class_id);
				//$('#section-subject-content').show();
			}
		});
	});

$("#add-section").click(function(){
	var class_id = $(this).attr('section-data');
	$("#section_register").attr('class_id', class_id);	
});

$("#section_register").click(function(){
	var class_id = $(this).attr('class_id');
	var section_name = $("#section_name").val();
	$.ajax({
		url: basepath+"/classes/"+class_id+"/sections",
		type: "POST",
		dataType: "json",
		data: {class_id: class_id, section:section_name},
		success: function(){
			$("#addSectionModal").modal('hide');
			viewClassDetail(class_id);
		}
	});
});

$("#add-subject").click(function(){
	var class_id = $(this).attr('subject-data');
	var str = "";
	$.ajax({
		url: basepath+"/teachers",
		type: "GET",
		dataType: "json",
		success: function(response){
			if(response.status===105){
				let data = response.data;
				$.each(data, function(keyRow, valueRow){
					var all_fname = valueRow['fname'];
					var all_mname = valueRow['mname'];
					var all_lname = valueRow['lname'];
					var all_teacher_id = valueRow['id'];
					if (all_mname===null) {
						all_mname = "";
					}
					if (all_lname===null) {
						all_lname = "";
					}
					let json = {
						'fullname': all_fname+ " " + all_mname + " " + all_lname,
						'id': valueRow['id']
					}
					subject_teacher_detail.push(json);
					str += '<option value = "'+valueRow['id']+'" >'+all_fname+' ' +all_mname+''+all_lname+'</option>';
				});
				console.log(subject_teacher_detail);
				$('#new_teacher_id').html(str);
				$('#subject_register').attr("class_id", class_id);
			}
		}
	});
	
});

	$("#subject_register").click(function(){
		var class_id = $(this).attr('class_id');
		var subject_name = $("#subject-name").val();
		var teacher_id = $('#new_teacher_id').val();
		console.log(subject_name);
		console.log("teacher_id::::");
		console.log(teacher_id);
		$.ajax({
			url: basepath+"/classes/"+class_id+"/subjects",
			type: "POST",
			dataType: "json",
			data: {class_id: class_id, subject:subject_name, teacher_id: teacher_id},
			success: function(){
				$("#addSubjectModal").modal('hide');
				viewClassDetail(class_id);
			}
		});
	});

});