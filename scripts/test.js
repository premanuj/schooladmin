$(document).ready(function(){
	var section_details = [];
	var subject_details = [];
	var class_details = [];
	//listClasses();
	var classInfo = function(){
		return new Promise(function(resolve, reject){
			resolve(
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
						}else{
							console.log('something wrong');
						}
					}
				})
				);
			
		});

	}

	var sectionInfo = function(){
		return new Promise(function(resolve, reject){
			resolve(
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
						}else{
							console.log('something wrong');
						}
					}
				}));
			
		});

	};

	var subjectInfo = function(){
		return new Promise(function(resolve, reject){
			resolve(
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
						}else{
							console.log('something wrong');
						}
					}
				}));
			
		});

	}

	var classDisplay = function(){
		return new Promise(function(resolve, reject){
			resolve(
				// console.log(class_details)
				// console.log(section_details)
				// console.log(subject_details)
				'mas'
				);
			
		});
		//if(class_details){
			
		//	return false;
			// $.each(class_details, function(keyRow, valueRow){
			// 	console.log(valueRow);
			// 	var class_id = valueRow['id'];
			// 	var no_of_sections = section_details.filter((section)=>section.class_id == class_id);
			// 	console.log(no_of_sections);
			// });
		//}
	}

	classInfo()
	.then(function(){
		sectionInfo();
	}).then(function(){
		subjectInfo();
	}).then(function(){
		classDisplay();
	}).then(function(result){
		console.log(result);
	});
	
	
	// classInfo()
	// .then(sectionInfo)
	// .then(subjectInfo)
	// .then(classDisplay);

// $("#").hide("slow", function())


								// str+= '<tr class="row-classes">';						
								// str+='<td class="col-class">'+classes+ '</td>';
								// str+='<td class="col-section">'+total_sections+'</td>';
								// str+='<td class="col-section">'+total_subjects+'</td>';
								// str+='<td class="col-details"><a data-toggle="modal" href="#editModal" class="btn btn-sm btn-primary btn-flat pull-left view-class-detail" data = "'+class_id+'">View Details</a></td>';
								// str+='</tr>';
								// console.log(str);
								// $("#body-classes").html(str);







							});