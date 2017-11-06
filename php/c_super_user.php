<?php
//header("Content-type:text/json");
header("Access-Control-Allow-Origin:*");
require_once("sqlConn.php");
$C=$_POST["C"];
switch ($C) {
	case 'select':
		selectuser();
		break;
	case 'delete':
		deleteuser();
		break;
	case 'update':
		updateuser();
		break;
	case 'add':
		adduser();
		break;
}

$conn->query("set names 'utf8'");
////查询语句
function selectuser(){
	global $conn;
	$L=$_POST["L"];
	if($L==1){
	$sql="select * from user";		
	}else if($L==2){
		$ID=$_POST["ID"];
		$sql="select * from user where id='$ID'";
	}
    $res_=$conn->query($sql);	
	$arr=[];
	if($res_){
	   foreach($res_ as $thisVal){
			array_push($arr,$thisVal);
	   }
	   $json_str=json_encode(array("data"=>$arr));
	   echo $json_str;
	}
}
////删除语句
function deleteuser(){
	global $conn;
	$ID=$_POST['ID'];
	$sql="delete from user where id='$ID'";
	$res_=$conn->query($sql);	
	if($res_){
		$infor=array('err' =>0 ,"msg"=>"删除成功" );
	}else{
		$infor=array('err' =>1 ,"msg"=>"删除失败" );
	}
	echo json_encode($infor);
}
////修改语句
function updateuser(){
	global $conn;
	$ID=$_POST['ID'];
	$Password=$_POST['Password'];
	$sql="update user set password='$Password'where id='$ID'";
	$res_=$conn->query($sql);	
	if($res_){
		$infor=array('err' =>0 ,"msg"=>"修改成功" );
	}else{
		$infor=array('err' =>1 ,"msg"=>"修改失败" );
	}
	echo json_encode($infor);
}
////添加
function adduser(){
	global $conn;
	$phone=$_POST['user'];
	$Password=$_POST['Password'];
	if(selectByinforTitle($phone)>0){
		echo "重复";
	}else{
		$res_=$conn->query("insert into user(id,phone,password) values('','$phone','$Password')");
		if($res_){
			echo "addOK";
		}else{
			echo "add失败";
		}
	}
}
//根据username查询
function selectByinforTitle($phone){
	global $conn;
	$res_=$conn->query("select * from user where phone='$phone'");
	if($num=mysqli_num_rows($res_)){
		return $num;
	}
}
?>