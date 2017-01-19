<?php
include("header.php"); 
?>
<div class="content-wrapper">
    <section class="content-header">
        <h1 id = "class-header">
            Classes Detail
            <small></small>
        </h1>
    </section>

    <!-- Main content for classes -->
    <section class="content" id = "class-content">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">Classes</h3>
                <h3 id = "success-bar" class="col-9-md alert-success"></h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Grades</th>
                                <th><i class="fa fa-sort"></i> Total no. of Sections</th>
                                <th><i class="fa fa-sort"></i> Total no. of Subjects</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "body-classes">
                        </tbody>
                            
                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
            <div class="box-footer clearfix">
                <a data-toggle="modal" href="#addModal" class="btn btn-sm btn-primary btn-flat pull-left">Add Class</a>
            </div><!-- /.box-footer -->
        </div><!-- /.box -->        
    </section><!-- /.content for classes -->

    <!-- Main content for induvidual classes -->
    <section class="content" id = "section-subject-content">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">Sections and Subjects</h3>
                <h3 id = "success-bar" class="col-9-md alert-success"></h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Sections</th>
                                <th colspan="2"><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "body-section">
                        </tbody>
                            
                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
            <div class="box-footer clearfix">
                <a data-toggle="modal" href="#addSectionModal" class="btn btn-sm btn-primary btn-flat pull-left" id = "add-section">Add Section</a>
            </div><!-- /.box-footer -->

            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> subjects</th>
                                <th colspan="2"><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody id = "body-subject">
                        </tbody>
                            
                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
            <div class="box-footer clearfix">
                <a data-toggle="modal" href="#addSubjectModal" class="btn btn-sm btn-primary btn-flat pull-left" id = "add-subject">Add Subject</a>
            </div><!-- /.box-footer -->

        </div><!-- /.box -->        
    </section><!-- /.content for classes -->
</div><!-- /.content-wrapper -->

<div class="modal fade" id="addModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Add Class</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="date">Grade:</label>
                            <input type="text" name="grade"  id="grade" class="form-control" placeholder="Please enter the new grade value">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="grade_register">Save</a>
            </div>
        </div>
    </div>
</div><!-- modal -->

<!-- add section modal -->
<div class="modal fade" id="addSectionModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Add Section</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="date">Section Name:</label>
                            <input type="text" name="section-name"  id="section_name" class="form-control" placeholder="Please enter the new section name">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="section_register">Save</a>
            </div>
        </div>
    </div>
</div><!-- add section modal -->

<!-- add subject modal -->
<div class="modal fade" id="addSubjectModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Add Subject</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="date">Subject Name:</label>
                            <input type="text" name="subject-name"  id="subject-name" class="form-control" placeholder="Please enter the new section name">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                          <label for="grade" id="grade-default">Teacher:</label>
                          <select class="form-control" id="new_teacher_id" name="teacher">
                          <option id = "teacher-default"></option>
                          </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="subject_register">Save</a>
            </div>
        </div>
    </div>
</div><!-- add section modal -->


<!-- edit section modal -->
<div class="modal fade" id="editSectionModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Edit Section</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="date">Section:</label>
                            <input type="text" name="grade"  id="old-section" class="form-control">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="edit_section">Save</a>
            </div>
        </div>
    </div>
</div><!-- modal -->

<!-- delete subject modal -->
<div class="modal fade" id="deleteSubjectModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Delete subject</h4>
            </div>
            <div class="modal-body">
                <p>Do you really want to delete this subject?</p>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="delete_subject">Delete</a>
            </div>
        </div>
    </div>
</div><!-- modal --><!-- edit subject modal -->
<div class="modal fade" id="editSubjectModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Edit subject</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="date">Subject:</label>
                            <input type="text" name="grade"  id="old-subject" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                          <label for="grade" id="grade-default">Teacher:</label>
                          <select class="form-control" id="teacher_id" name="teacher">
                          <option id = "teacher-default"></option>
                          </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="edit_subject">Save</a>
            </div>
        </div>
    </div>
</div><!-- modal -->

<div class="modal fade" id="editModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Edit Student</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="date">First Name:</label>
                            <input type="text" name="fname"  id="fname"class="form-control" >
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="mname">Middle Name:</label>
                            <input type="text" name="mname"  id="mname" class="form-control date" value = "">             
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
                          <label for="grade" id="grade-default">Grade</label>
                          <select class="form-control" id="class_id" name="grade">
                          <option id = "class-default"></option>
                          </select>
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
                <a href="javascript:;" class="btn btn-primary btn-sm" id="edit_student_save">Save</a>
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
<script type="text/javascript" src="scripts/classes.js"></script>