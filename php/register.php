<?php
	require('sqlConn.php');
 $username=$_POST['username'];
  $pwd=$_POST['pwd'];
  global $conn;
    $conn->query("set names 'utf8'");
    $result=$conn->query("insert into user (ID,phone,password) values('','$username','$pwd')");

?>