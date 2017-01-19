<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Quero Contacto| Dashboard</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/ionicons.min.css">
  <link rel="stylesheet" href="css/AdminLTE.min.css">
  <link rel="stylesheet" href="css/skin-blue.min.css">
  <link rel="stylesheet" href="css/data-table.css">
  <link rel="stylesheet" href="css/style.css">
  <link href="css/datedropper.min.css" rel="stylesheet" type="text/css" />

</head>
<body class="hold-transition skin-blue sidebar-mini">
  <div class="wrapper">
    <!-- Main Header -->
    <header class="main-header">
      <!-- Logo -->
      <a href="index2.html" class="logo">
        <span class="logo-mini"><b>Q</b>C</span>
        <span class="logo-lg"><b>Quero</b>Contacto</span>
      </a>
      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle">
                <img src="images/user2-160x160.jpg" class="user-image" alt="User Image">
                <span class="hidden-xs">Shiva Pandey</span>
              </a>
              <!-- Control Sidebar Toggle Button -->
              <li class="dropdown navbar-user">
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gears"></i></a>
                <ul class="dropdown-menu animated fadeInLeft">
                  <li><a href="changepassword.php">Change Password</a></li>
                  <li><a href="logout.php">Log Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <aside class="main-sidebar">
        <section class="sidebar">
          <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
              <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <!-- /.search form -->

          <!-- Sidebar admin Menu -->
          <ul class="sidebar-menu" id="admin-menu">
            <li class="header">DASHBOARD</li>
            <li class="menu users"><a href="teachers.php"><i class="fa fa-user"></i> <span>Teachers</span></a></li>
            <li class="treeview">
              <a href="#"><i class="fa fa-sitemap"></i> <span>Students</span> <i class="fa fa-angle-down pull-right"></i></a>
              <ul id = "class-menu" class="treeview-menu">
              </ul>
            </li>
            <li class="menu business"><a href="classes.php"><i class="fa fa-briefcase"></i> <span>Classes</span></a></li>
            <li class="menu business"><a href="business.php"><i class="fa fa-briefcase"></i> <span>Sections</span></a></li>
            <li class="menu category"><a href="category.php"><i class="fa fa-leaf"></i> <span>Category</span></a></li>        
          </ul><!-- /.sidebar-admin-menu -->

          <!-- Sidebar teacher Menu -->
          <ul class="sidebar-menu " id="teacher-menu">
            <li class="header">DASHBOARD</li>
            <li class="menu users"><a href="teachers-index.php"><i class="fa fa-user"></i> <span>Profile</span></a></li>
            <li class="menu business"><a href="teacher-assignment.php"><i class="fa fa-briefcase"></i> <span>Assignments</span></a></li>
            <li class="menu business"><a href="teacher-exam.php"><i class="fa fa-briefcase"></i> <span>Exams</span></a></li>
            <li class="treeview">
              <a href="results.php"><i class="fa fa-leaf"></i> <span>Results</span> <i class="fa fa-angle-down pull-right"></i></a>
              <ul id = "result-menu" class="treeview-menu">
              </ul>
            </li>
            
          </ul><!-- /.sidebar-admin-menu -->
        </section>
        <!-- /.sidebar -->
      </aside>
      <script>

        if (sessionStorage.getItem("admin_access_token")) {
          var session = sessionStorage.getItem("admin_access_token");
          console.log(session);
          if(session === undefined || session === null){
            console.log(session);
            window.location.href="index.php";
          }
        }

        if (sessionStorage.getItem("teacher_access_token")) {
          var session = sessionStorage.getItem("teacher_access_token");
          console.log(session);
          if(session === undefined || session === null){
            console.log(session);
            window.location.href="index.php";
          }
        }

      </script>
