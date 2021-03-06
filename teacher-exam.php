<?php
include("header.php"); 
?>
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Exam Detail
            <small></small>
        </h1>
    </section>

    <!-- Main content content-class-exam -->
    <section class="content" id= "content-class-exam">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">Exams</h3>
                <h3 id = "success-bar" class="col-9-md alert-success"></h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Grades</th>
                                <th><i class="fa fa-sort"></i> Subjects</th>
                                <th colspan="2"><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "body-exam">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main content content-main-exam -->
    <section class="content" id= "content-main-exam">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">Exams</h3>
                <h3 id = "success-bar" class="col-9-md alert-success"></h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Exam Title</th>
                                <th><i class="fa fa-sort"></i> Created Date</th>
                                <th><i class="fa fa-sort"></i> Submit Date</th>
                                <th colspan="2"><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "body-main-exam">
                        </tbody>

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
            <div class="box-footer clearfix">
                <a class="btn btn-sm btn-primary btn-flat pull-left back-to-veiw-detail">Back</a>
                <a data-toggle="modal" href="#addExamModal" class="btn btn-sm btn-warning btn-flat pull-right">Publish new exam</a>
            </div><!-- /.box-footer -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main content content-empty-exam -->
    <section class="content" id= "content-empty-exam">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">No exams Available. Click button below to add publish new exams.</h3>
            </div><!-- /.box-header -->
            <div class="box-footer clearfix">
                <a data-toggle="modal" href="#addExamModal" class="btn btn-sm btn-primary btn-flat pull-left">Publish new exam</a>
            </div><!-- /.box-footer -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main content content-class-exam-question -->
    <section class="content" id= "content-class-exam-question">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">Questions</h3>
                <h3 id = "success-bar" class="col-9-md alert-success"></h3>
            </div><!-- /.box-header -->
            <div class="box-body">
            <div class="col-md-12 alert-green">
            
         </div>
            <div class="all-questions">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="col-md-12 objective-questions">
                
                    </div>
                    <hr>
                    <div class="col-md-12 subjective-questions">
                        
                    </div>
                </div>
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
            <hr>
            <div class="col-md-6 collg-6">
                <a id="addObjectiveQUestion" class="btn btn-lg btn-primary btn-flat pull-left" >Objective Questions</a>
            </div>
            <div class="col-md-6 collg-6">
                <a id="addSubjectiveQuestion" class="btn btn-lg btn-primary btn-flat pull-left">Subjective Questions</a>
            </div>
        </div><!-- /.box -->        
    </section><!-- /.content -->

    <!-- Main content content-class-exam-question -->
    <section class="content" id= "add-objective-exam-question">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">Objective Questions</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="main-objective-form">
                    <form class="objective_form">
                      <div class="form-group">
                        <label for="question-title">Question title(1)</label>
                        <textarea class="form-control question-title" rows="3" required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="objective-option">Option (a):</label>
                        <input type="radio" name="correct" value="a" checked>
                        <input type="text" class="form-control objective-option-a" placeholder="option one" required>
                    </div>  
                    <div class="form-group">
                        <label for="objective-option">Option (b):</label>
                        <input type="radio" name="correct" value="b">
                        <input type="text" class="form-control objective-option-b" placeholder="option two" required>
                    </div> 
                    <div class="form-group">
                        <label for="objective-option">Option (c):</label>
                        <input type="radio" name="correct" value="c">
                        <input type="text" class="form-control objective-option-c" placeholder="option three" required>
                    </div>  
                    <div class="form-group">
                        <label for="objective-option">Option (d):</label>
                        <input type="radio" name="correct" value="d">
                        <input type="text" class="form-control objective-option-d" placeholder="option four" required>
                    </div> 
                    <div class="form-group">
                        <label for="objective-option">Weightage Marks:</label>
                        <input type="number" class="form-control weightage-mark" placeholder="Weightage Mark" required>
                    </div>                  
                </form>
            </div>
            <hr>
            <div class="col-md-8" id="objective-button">
                <a data-toggle="modal" href="#askForSubjectiveModal" class="btn btn-sm btn-primary btn-flat pull-left submit-subjective">Submit Questions</a>
                <a class="btn btn-sm btn-primary btn-flat pull-left submit-final-question">Final Submit</a>
                <a id="add-more-objective-question" class="btn btn-sm btn-primary btn-flat pull-right">Add more Question</a>
            </div>
        </div><!-- /.box-body -->


    </div><!-- /.box -->        
</section><!-- /.content --> 

<!-- Main content content-class-exam-question -->
<section class="content" id= "add-subjective-exam-question">
    <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="col-3-md box-title">Subjective Questions</h3>
        </div><!-- /.box-header -->
        <div class="box-body">
        <div class="main-subjective-form">
                <div class="subjective_form">
                  <div class="form-group">
                    <label for="question-title">Question title(1)</label>
                    <textarea class="form-control question-title" rows="3" required></textarea>
                </div>

                <div class="form-group">
                    <label for="objective-option">Weightage Marks:</label>
                    <input type="text" class="form-control weightage-mark" placeholder="Weightage Mark" required>
                </div>    
            </div>
        </div>

        <hr>
        <div class="col-md-8" id="subjective-button">
            <a data-toggle="modal" href="#askForObjectiveModal" class="btn btn-sm btn-primary btn-flat pull-left submit-subjective" >Submit Questions</a>
            <a class="btn btn-sm btn-primary btn-flat pull-left submit-final-question">Final Submit</a>
            <a id="add-more-subjective-question" class="btn btn-sm btn-primary btn-flat pull-right">Add more Question</a>
        </div>
    </div><!-- /.box-body -->

</div><!-- /.box -->        
</section><!-- /.content --> 

</div><!-- /.content-wrapper -->


<div class="modal fade" id="askForSubjectiveModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Confirm Dialog</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    <p>Do you also want to add subjective questions?</p>
                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default final-submit" id="submit-objective-question" >No, submit Objective only</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="addSubjectiveQuestion-modal">Yes</a>
            </div>
        </div>
    </div>
</div><!-- modal -->

<div class="modal fade" id="askForQuestionDeleteModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Confirm Dialog</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    <p>Do you also want to add delete this question?</p>
                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default final-submit" data-dismiss="modal">Cancel</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="deleteQuestion-modal">Yes</a>
            </div>
        </div>
    </div>
</div><!-- modal -->

<div class="modal fade" id="askForObjectiveModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Confirm Dialog</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    <p>Do you also want to add objective questions?</p>
                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default final-submit" id="submit-subjective-question">No, submit Subjective only</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="addObjectiveQuestion-modal">Yes</a>
            </div>
        </div>
    </div>
</div><!-- modal -->


<div class="modal fade" id="addExamModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">New Exam</h4>
                <span class="alert-green"></span>
                <span class="alert-red"></span>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">

                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="date">Exam Title:</label>
                            <input type="text" name="title"  id="exam-title"class="form-control"  placeholder="Please enter the exam title">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="username">Submission Date:</label>
                            <input type="text" name="submit-date"  id="submit-date" class="form-control datepicker-inline date"  placeholder="Please enter new submit date">             
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="add-exam">Save</a>
            </div>
        </div>
    </div>
</div><!-- modal -->

<div class="modal fade" id="editExamModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Edit Exam</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">

                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="new-exam">Exam:</label>
                            <input type="text" name="new-exam"  id="new-exam-title"class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="new-submit-date">Submit Date:</label>
                            <input type="text" name="new-submit-date"  id="new-submit-date" class="form-control datepicker-inline date" value = "">             
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="edit_exam_save">Save</a>
            </div>
        </div>
    </div>
</div><!-- modal -->

<?php 
include("footer.php"); 
?>       
<script>
    active("users");
</script>
<script type="text/javascript" src="scripts/teacher-exam.js"></script>
