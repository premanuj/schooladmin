<?php
include("header.php"); 
?>
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Question Details
            <small></small>
        </h1>
    </section>

    <!-- Main content content-class-exam-question -->
    <section class="content" id= "content-class-exam-question">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">Questions</h3>
                <h3 id = "success-bar" class="col-9-md alert-success"></h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="col-md-6 collg-6">
                    <a data-toggle="modal" href="#add" class="btn btn-lg btn-primary btn-flat pull-left">Objective Questions</a>
                </div>
                <div class="col-md-6 collg-6">
                    <a data-toggle="modal" href="#addAssignmentModal" class="btn btn-lg btn-primary btn-flat pull-left">Subjective Questions</a>
                </div>
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content --> 

    <!-- Main content content-empty-exam-question -->
    <section class="content" id= "content-empty-exam-question">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">No questions Available. Click button below to add new questions.</h3>
            </div><!-- /.box-header -->
             <div class="col-md-6 collg-6">
                    <a data-toggle="modal" href="#add" class="btn btn-lg btn-primary btn-flat pull-left">Objective Questions</a>
                </div>
                <div class="col-md-6 collg-6">
                    <a data-toggle="modal" href="#addAssignmentModal" class="btn btn-lg btn-primary btn-flat pull-left">Subjective Questions</a>
                </div>
        </div><!-- /.box -->        
    </section><!-- /.content -->
</div><!-- /.content-wrapper -->



<?php 
include("footer.php"); 
?>       
<script>
    active("users");
</script>
<script type="text/javascript" src="scripts/teacher-exam.js"></script>