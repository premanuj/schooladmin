<?php
include("header.php"); 
?>

<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Teachers Detail
            <small></small>
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="col-3-md box-title">Teachers</h3>
                <span class="green-alert"></span>
                <span class="red-alert"></span>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Name</th>
                                <th><i class="fa fa-sort"></i> Email</th>
                                <th><i class="fa fa-sort"></i> Phone No.</th>
                                <th><i class="fa fa-sort"></i> Address</th>
                                <th><i class="fa fa-sort"></i> Actions</th>
                            </tr>
                        </thead>
                        <tbody class = "body-teacher">
                        </tbody>
                            
                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
            <div class="box-footer clearfix">
                <a data-toggle="modal" href="#addModal" class="btn btn-sm btn-primary btn-flat pull-left">Add Teachers</a>
            </div><!-- /.box-footer -->
        </div><!-- /.box -->        
    </section><!-- /.content -->

</div><!-- /.content-wrapper -->

<div class="modal fade" id="addModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Add Teacher</h4>
            </div>
            <div class="modal-body">
                <form id="main-contact-form" class="contact-form" name="contact-form">
                    <span class="check-email alert-red"></span>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="date">Email:</label>
                            
                            <input type="email" name="date"  id="email"class="form-control"  placeholder="Please enter the email address" required>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="username" name="username"  id="username" class="form-control date"  placeholder="Please enter the username">             
                        </div>
                    </div><div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="title">Password:</label>
                            <input type="password" name="date"  id="password" class="form-control date"  placeholder="Please enter the password">             
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-primary btn-sm" id="teacher_register">Save</a>
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
            </div>
        </div>
    </div>
</div><!-- modal -->


<div class="modal fade" id="editModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">                  
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                <h4 class="modal-title">Edit Teacher</h4>
            </div>
            <div class="modal-body">
                <span class="alert-red"></span>
                <span class="alert-green"></span>
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
                            <input type="text" name="dob"  id="dob" data-large-default="true" class="form-control datepicker-inline date"  value="" data-date-format="mm/dd/yyyy">                           
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12">
                        <div class="form-group">
                            <label for="join-date">Join Date:</label>
                            <input type="text" name="join-date"  id="join-date" class="form-control datepicker-inline date" value="" data-date-format="mm/dd/yyyy">
                            
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
                            <input type="number" name="phone"  id="new-contact" class="form-control date"  placeholder="Please enter the new phone">             
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer" style="clear: both;">
                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal">Close</a>
                <a href="javascript:;" class="btn btn-primary btn-sm" id="edit_teacher_save">Save</a>
            </div>
        </div>
    </div>
</div><!-- edit modal -->

<?php 
include("footer.php"); 
?>       
<script>
    active("users");
   // $('.data-table').DataTable();
</script>
<script type="text/javascript" src="scripts/teachers.js"></script>