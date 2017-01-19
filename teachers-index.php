<?php
include("header.php"); 
?>
<div class="content-wrapper">
	<section class="content-header">
		<h1>
			Teachers Profile Detail
			<small></small>
		</h1>
	</section>

	<!-- Main content -->
	<section class="content">
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="col-3-md box-title">Profile</h3>
				<h3 id = "success-bar" class="col-9-md box-title" style="display: none;">New teachers added successfully</h3>
			</div><!-- /.box-header -->
			<div class="box-body" id="teacher-empty-body">
			<p></p>
			<div>
			<div class="box-body" id="teacher-profile-body">
				<form class="col-md-9">
					<div class="form-group">
						<label for="old-fname">Frist Name: </label>
						<p class = "form-control" id = 'old-fname'></p>
					</div>
					<div class="form-group">
						<label for="old-mname">Middle Name: </label>
						<p class = "form-control" id = 'old-mname'></p>
					</div>
					<div class="form-group">
						<label for="old-lname">Last Name: </label>
						<p class = "form-control" id = 'old-lname'></p>
					</div>
					<div class="form-group">
						<label for="old-contact">Contact: </label>
						<p class = "form-control" id = 'old-contact'></p>
					</div>
					<div class="form-group">
						<label for="old-email">Email: </label>
						<p class = "form-control" id = 'old-email'></p>
					</div>
					<div class="form-group">
						<label for="old-address">Address: </label>
						<p class = "form-control" id = 'old-address'></p>
					</div>
					<div class="form-group">
						<label for="old-dob">Date Of Birth: </label>
						<p class = "form-control" id = 'old-dob'></p>
					</div>
					<div class="form-group">
						<label for="old-join-date">Join Date: </label>
						<p class = "form-control" id = 'old-join-date'></p>
					</div>

				</form>
			</div><!-- /.box-body -->
			<div class="box-footer clearfix">
				<a data-toggle="modal" href="#editTeacherProfileModal" class="btn btn-sm btn-primary btn-flat pull-left" id="edit-teacher-profile">Edit Profile</a>
				<a data-toggle="modal" href="#addTeacherProfileModal" class="btn btn-sm btn-primary btn-flat pull-left" id="add-teacher-profile">Add Profile</a>
			</div><!-- /.box-footer -->
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
<script type="text/javascript" src="scripts/teachers-index.js"></script>