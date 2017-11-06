<?php
//header("Content-type:text/json");
header("Access-Control-Allow-Origin:*");
//获取用户名密码
require_once("sqlConn.php");
$username=$_GET["username"];
$password=$_GET["password"];
$C=$_GET["C"];
$conn->query("set names 'utf8'");
if($C==3){
	$sql="update admin set password='{$password}'where username='{$username}'";
	$res=$conn->query($sql);	
	if($res){
	$infor=array('err' =>1 ,"msg"=>"修改成功" );
	}
	echo json_encode($infor);	
}else if($C!=3){	
	$sql="select * from admin where username='{$username}'";
	//执行sql语句
	$res=$conn->query($sql);	
	$result=$res->fetch_assoc();
	if($result){
		//存在该用户
		if($result["password"]===$password){
		$infor=array('err' =>0 ,"msg"=>"登陆成功" );
		}else{
			$infor=array('err' =>1 ,"msg"=>"登陆失败" );
		}
	}else{
		//不存在该用户:1代表失败
		$infor=array('err' =>1 ,"msg"=>"不存在该用户" );
	}
	if($C==1){
		echo json_encode($result);	
	}else if($C==2){
		echo json_encode($infor);	
	}
}



?>