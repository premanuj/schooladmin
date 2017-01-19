<?php
include("header.php"); 
$grade = $_GET['class'];
$class_id = $_GET['id'];

?>

<script>
    var c_id = <?php echo $class_id; ?>;
    var grade = <?php echo $grade; ?>;
</script>
<div class="content-wrapper">
	<section class="content-header">
		<h1>
			Result Detail Grade <?php echo $grade ;?>
			<small></small>
		</h1>
	</section>

	<!-- Main result-subject-body -->
    <section class="content" id= "result-subject-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All Results</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Grades</th>
                                <th><i class="fa fa-sort"></i> Subjects</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "table-subject-result">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->     
    </section>

    <!-- Mainview-exam-answer-body -->
    <section class="content" id= "view-exam-answer-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All Exam answer</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Work Title</th>
                                <th><i class="fa fa-sort"></i> Created Date</th>
                                <th><i class="fa fa-sort"></i> Submit Date</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "table-exam-answer">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->


    <!-- Main result-assignment-body -->
    <section class="content" id= "result-assignment-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All Assignment Results</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="col-md-4">
                    <button class="btn btn-sm btn-primary btn-flat pull-left published-assignment-results" style = "margin-right:5px;">Published Results</button>                   
                </div>
                <div class="col-md-4">
                    <button class="btn btn-sm btn-primary btn-flat pull-left view-assignment-answers" style = "margin-right:5px;">View Answers</button>
                </div>
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main result-exam-body -->
    <section class="content" id= "result-exam-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All Exam Results</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="col-md-4">
                    <button class="btn btn-sm btn-primary btn-flat pull-left published-exam-results" style = "margin-right:5px;">Published Results</button>                   
                </div>
                <div class="col-md-4">
                    <button class="btn btn-sm btn-primary btn-flat pull-left view-exam-answers" style = "margin-right:5px;">View Answers</button>
                </div>
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main view-assignment-answer-body -->
    <section class="content" id= "view-assignment-answer-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All Assignment answer</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Work Title</th>
                                <th><i class="fa fa-sort"></i> Created Date</th>
                                <th><i class="fa fa-sort"></i> Submit Date</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "table-assignment-answer">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

     <!-- Main view-exam-answer-body -->
    <section class="content" id= "view-exam-answer-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All Exam answer</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Work Title</th>
                                <th><i class="fa fa-sort"></i> Created Date</th>
                                <th><i class="fa fa-sort"></i> Submit Date</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "table-exam-answer">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main view-assignment-published-result -->
    <section class="content" id= "view-assignment-published-result">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All Assignment answer</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Work Title</th>
                                <th><i class="fa fa-sort"></i> Created Date</th>
                                <th><i class="fa fa-sort"></i> Submit Date</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "table-assignment-published-result">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main view-exam-published-result -->
    <section class="content" id= "view-exam-published-result">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All Exam's answers</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Work Title</th>
                                <th><i class="fa fa-sort"></i> Created Date</th>
                                <th><i class="fa fa-sort"></i> Submit Date</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "table-exam-published-result">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main student-result-answer-body -->
    <section class="content" id= "student-assignment-result-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All student's assignment results</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Student Name</th>
                                <th><i class="fa fa-sort"></i> Score</th>
                            </tr>
                        </thead>
                        <tbody id = "table-assignment-student-result">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main student-result-answer-body -->
    <section class="content" id= "student-exam-result-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All student's Exam results</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Student Name</th>
                                <th><i class="fa fa-sort"></i> Score</th>
                            </tr>
                        </thead>
                        <tbody id = "table-exam-student-result">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main student-assignment-answer-body -->
    <section class="content" id= "student-assignment-answer-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All student's assignments</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Student Name</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "table-assignment-student-answer">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main student-exam-answer-body -->
    <section class="content" id= "student-exam-answer-body">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All student's exam</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Student Name</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "table-exam-student-answer">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main student-assignment-answer-body -->
    <section class="content" id= "student-assignment-answer-details">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All student's assignment answer</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i>Please input marks: </th>
                            </tr>
                        </thead>
                        <tbody id = "table-assignment-student-answer-details">
                            
                        </tbody>

                    </table>
                    <button class="btn btn-default" id="submit-assignment-mark">Submit</button>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main student-assignment-answer-body -->
    <section class="content" id= "student-exam-answer-details">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">All student's assignment answer</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i>Please input marks: </th>
                            </tr>
                        </thead>
                        <tbody id = "table-exam-student-answer-details">
                            
                        </tbody>

                    </table>
                    <button class="btn btn-default" id="submit-exam-mark">Submit</button>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main student-mark-submited -->
    <section class="content" id= "student-mark-submited">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">Marks has been already submitted.</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                    <button class="btn btn-default back-student-exam-list">Back</button>
                    <button class="btn btn-default back-student-assignment-list">Back</button>
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

<!-- Main result-exam-body -->
<section class="content" id= "result-exam-body">
    <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="col-3-md box-title">All Exam Results</h3>
        </div><!-- /.box-header -->
        <div class="box-body">
            <div class="table-responsive">
                <table class="table no-margin data-table">
                    <thead>
                        <tr>
                            <th><i class="fa fa-sort"></i> Grades</th>
                            <th><i class="fa fa-sort"></i> Subjects</th>
                            <th><i class="fa fa-sort"></i> Actions</th>
                        </tr>
                    </thead>
                    <tbody id = "table-exam-result">
                    </tbody>

                </table>
            </div><!-- /.table-responsive -->
        </div><!-- /.box-body -->
    </div><!-- /.box -->        
</section><!-- /.content -->

</div><!-- /.content-wrapper -->

<!-- add teacher profile model -->
<div class="modal fade" id="addTeacherProfileModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Add Your Profile</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">

                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="fname">First Name:</label>
                            <input type="text" name="fname"  id="fname"class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="mname">Middle Name:</label>
                            <input type="text" name="mname"  id="mname" class="form-control date" >             
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="lname">Last Name:</label>
                            <input type="text" name="lname" id="lname" class="form-control date" value="">             
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="dob">Date of Birth:</label>
                            <input type="text" name="dob"  id="dob" data-large-default="true" class="form-control date"  value="">                           
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="join-date">Join Date:</label>
                            <input type="text" name="join-date"  id="join-date" class="form-control date" value="">
                            
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="title">Address:</label>
                            <input type="text" name="address"  id="new-address" class="form-control date" value="">             
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="title">Contact:</label>
                            <input type="text" name="phone"  id="contact" class="form-control date"  placeholder="Please enter the new phone">             
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="add_teacher_profile_save">Save</a>
            </div>
        </div>
    </div>
</div><!-- modal -->
<!-- edit teacher profile prank -->
<div class="modal fade" id="editTeacherProfileModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Edit Your Profile</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">

                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="date">First Name:</label>
                            <input type="text" name="fname"  id="new-fname"class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="mname">Middle Name:</label>
                            <input type="text" name="mname"  id="new-mname" class="form-control date" >             
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="lname">Last Name:</label>
                            <input type="text" name="lname" id="new-lname" class="form-control date" value="">             
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="dob">Date of Birth:</label>
                            <input type="text" name="dob"  id="new-dob" data-large-default="true" class="form-control date"  value="">                           
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="join-date">Join Date:</label>
                            <input type="text" name="join-date"  id="new-join-date" class="form-control date" value="">
                            
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="title">Address:</label>
                            <input type="text" name="address"  id="new-address" class="form-control date" value="">             
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="title">Contact:</label>
                            <input type="text" name="phone"  id="new-contact" class="form-control date"  placeholder="Please enter the new phone">             
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="edit_teacher_profile_save">Save</a>
            </div>
        </div>
    </div>
</div><!-- modal -->

<?php
include("footer.php"); 
?>
<script type="text/javascript" src="scripts/results.js"></script>
<script type="text/javascript" src="scripts/teachers-index.js"></script>
