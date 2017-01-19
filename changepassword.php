<?php include("header.php"); ?>       
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Change Password
            <small></small>
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="box box-success">
            <div class="box-header with-border">
                <h3 class="box-title">Change Password</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <form action="#" method="post" id="changepasswordform"> 
                    <div class="form-group">
                        <label>Old Password</label>
                        <input type="password" name="password" class="form-control"> 
                    </div>
                    <div class="form-group">
                        <label>New Password</label>
                        <input type="password" name="newpassword" class="form-control"> 
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmpassword" class="form-control"> 
                    </div>
                    <input type="submit" name="submit" value="Update" class="btn btn-success">
                </form>
            </div><!-- /.box-body -->
            <div class="box-footer">
                The footer of the box
            </div><!-- box-footer -->
        </div><!-- /.box -->
    </section><!-- /.content -->
</div><!-- /.content-wrapper -->
<?php include("footer.php"); ?>     