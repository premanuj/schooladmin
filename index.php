<?php include("header-lr.php");?>
<body class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo admin-logo">
        <a href="index.php"><b>Admin</b>Login</a>
      </div><!-- /.login-logo -->
      <div class="teacher-logo login-logo">
        <a href="index.php"><b>Teacher</b>Login</a>
      </div><!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session </p>
        <div class="">
          <span class="alert alert-green"></span>
          <span class="alert alert-red"></span>
        </div>
        <form action="javascript:;" method="post">
          <div class="form-group has-feedback">
            <input type="email" class="form-control" id = "email" placeholder="Email">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" id = "password" placeholder="Password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox"> Remember Me
                </label>
              </div>
            </div><!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat" id = "admin-sign-in">Sign In</button>
              <button type="submit" class="btn btn-primary btn-block btn-flat" id = "teacher-sign-in">Sign In</button>
            </div><!-- /.col -->
          </div>
        </form>

        <a href="#">I forgot my password</a><br>
      </div><!-- /.login-box-body -->
      <br><br>
      <p><a class="btn btn-lg btn-primary btn-flat " id = "teacher-login">Teacher Login</a></p>
      <p><a class="btn btn-lg btn-primary btn-flat " id = "admin-login">Admin Login</a></p>
    </div><!-- /.login-box -->
<?php include("footer-lr.php"); ?>
<script type="text/javascript" src="scripts/config.js"></script>
<script type="text/javascript" src="scripts/admin.js"></script>
