<?php include("header.php"); ?>       
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Category Detail
            <small></small>
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Category</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"></i> Category Image</th>
                                <th><i class="fa fa-sort"></i> Category Name</th>
                                <th>Action</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="images/photo1.png" style="width: 100px;" class="img-thumbnail"></td>
                                <td>Business</td>
                                <td><a href="#" class="btn btn-success btn-sm" style="margin-right:15px;">Edit</a>
                                    <a href="#" class="btn btn-danger btn-sm">Delete</a></td>
                            </tr>                          

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
            <div class="box-footer clearfix">
<!--                <a href="javascript::;" class="btn btn-sm btn-primary btn-flat pull-left">Add New User</a>
                <a href="javascript::;" class="btn btn-sm btn-default btn-flat pull-right">View All Users</a>-->
            </div><!-- /.box-footer -->
        </div><!-- /.box -->        
    </section><!-- /.content -->
</div><!-- /.content-wrapper -->
<?php include("footer.php"); ?> 
<script>
    active("category");
    $('.data-table').DataTable();
</script>