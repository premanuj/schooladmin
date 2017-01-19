<?php include("header.php"); ?>  
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Business Detail
            <small></small>
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="box box-info">
            <div class="box-header with-border">
                <h3 class="box-title">Business</h3>
            </div><!-- /.box-header -->
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table no-margin data-table">
                        <thead>
                            <tr>
                                <th><i class="fa fa-sort"> </i> Business Name</th>
                                <th><i class="fa fa-sort"> </i> Business Address</th>
                                <th><i class="fa fa-sort"> </i> Contact No.</th>
                                <th><i class="fa fa-sort"> </i> Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Business 1</td>
                                <td>SCO-226, Sector 20, Panchkula</td>
                                <td>9802493394</td>
                                <td>Tour Travels</td>
                                <td><button class="btn btn-info btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td>Business 2</td>
                                <td>SCO-226, Sector 20, Panchkula</td>
                                <td>9813796324</td>
                                <td>IT Firm</td>
                                <td><button class="btn btn-info btn-sm">Update</button></td>
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
    active("business");
    $('.data-table').DataTable();
</script>