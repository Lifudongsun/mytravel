<?php
require('sqlConn.php');
global $conn;
  $conn->query("set names 'utf8'");
  $qw=$_POST['se'];

$qq1=$_POST['sep1'];
$result=$conn->query("SELECT * FROM user where phone='$qw' and password='$qq1'");
if ($num=mysqli_num_rows($result)) {
    echo $num;
}

?>