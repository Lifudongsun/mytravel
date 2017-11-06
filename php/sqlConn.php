<?php
$dbHost="localhost";
$dbUserName="root";
$dbPWD="root";
$DBname="travel";
$char_code='utf8';

$conn=new mysqli($dbHost,$dbUserName,$dbPWD,$DBname);
if(mysqli_connect_error()){
	echo "数据库链接失败";
}
 ?>



 //百度的
<?php
    //连接想要连接的数据库，localhost是本地服务器，root为数据库的账号，我的密码为0所以是空
    $con = mysql_connect("localhost","root","");
    //设置字符集，将字符集设置为utf8 的格式，这是大多数的中文都识别的
    mysql_query("SET NAMES 'utf8'");
    mysql_query("SET CHARACTER SET utf8");
    if(!$con){
        die(mysql_error());
    }
    //连接数据库test
    mysql_select_db("test",$con);
?>