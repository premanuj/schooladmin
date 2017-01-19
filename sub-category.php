<?php include("header.php"); ?>       
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Sub-Category Detail
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
                                <th><i class="fa fa-sort"></i> Sub Category Name</th>
                                <th><i class="fa fa-sort"></i> Category Name</th>
                                <th>Action</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tour Travels</td>
                                <td>Business</td>
                                <td><a href="#" class="btn btn-success btn-sm" style="margin-right:15px;">Edit</a>
                                    <a href="#" class="btn btn-danger btn-sm">Delete</a></td>
                            </tr>                          

                    </table>
                </div><!-- /.table-responsive -->
            </div><!-- /.box-body -->
            <div class="box-footer clearfix">
                
            </div><!-- /.box-footer -->
        </div><!-- /.box -->        
    </section><!-- /.content -->
</div><!-- /.content-wrapper -->
<?php include("footer.php"); ?>  
<script>
    active("sub-category");
    $('.data-table').DataTable();
</script>