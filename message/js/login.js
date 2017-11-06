//页面加载获取验证码
checkCode();
$(".login_btn").on("click", function() {
	if($(".input_yan").val() == $(".yanzheng").text()) {
	var aja=new XMLHttpRequest();
  aja.onreadystatechange=readStat;
  aja.open('post','../php/login.php',true);
  aja.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  aja.send("se="+$('.user').val()+"&sep1="+$('.pass').val());
  function readStat() {
  	 
  if (aja.readyState==4&&aja.status==200) {
  	
  var result=aja.responseText;
 console.log(result)
     if (result==1) {
      alert('登录成功');
      window.location.href = "../index.html";
}else{
	alert('登录失败')
}
   }
 }
	} else {
		$(".msg_win span").text("对不起，您输入的验证码不正确!");
		$(".msg").css({
			"color": "red",
			"visibility": "inherit"
		});
	}
});
//定义验证码
var code;
function checkCode() {
	code = "";
	var codelength = 4; //验证码的长度
	var checkCode = document.querySelector(".yanzheng");
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
	for(var i = 0; i < codelength; i++) {
		var charNum = Math.floor(Math.random() * 52);
		code += codeChars[charNum];
	}
	if(checkCode) {
		checkCode.className = "yanzheng";
		checkCode.innerHTML = code;
	}
}
$(".yanzheng").on("click", function() {
	checkCode();
});