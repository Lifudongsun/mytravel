//点击手机注册
$(".emresg").on("click", function() {
	$(".form").css({
		"display": "none"
	});
	$(".form1").css({
		"display": "block"
	});
	$(".emresg").css({
		"color": "red",
		"background": "white",
		"border": "1px solid rgb(221,221,221)",
		"border-bottom": "0px solid rgb(221,221,221)"
	});
	$(".phresg").css({
		"color": "black",
		"background": "white",
		"border": "0px solid rgb(221,221,221)"
	});
});
//点击email
$(".phresg").on("click", function() {
	$(".form").css({
		"display": "block"
	});
	$(".form1").css({
		"display": "none"
	});
	$(".phresg").css({
		"color": "red",
		"background": "white",
		"border": "1px solid rgb(221,221,221)",
		"border-bottom": "0px solid rgb(221,221,221)"
	});
	$(".emresg").css({
		"color": "black",
		"background": "white",
		"border": "0px solid rgb(221,221,221)"
	});
});
var box = document.querySelectorAll(".label");
var box1 = document.querySelectorAll(".label_1");
//验证手机号
$(".phone").on("blur", function() {
	var c = $(".phone").val();
	var re = /^1[34578]\d{9}$/;
	if(re.test(c)) {
		box[0].innerHTML = "输入正确";
		box[0].style.color = "green";
		$(".pass").attr("disabled", false);
		$(".again_pass").attr("disabled", false);
		$(".input_yan").attr("disabled", false);
		$(".inputph_yan").attr("disabled", false);
		$(".regist_btn").css({
			"background": "rgb(235,26,62)",
			"color": "white"
		});
	} else {
		$(".pass").attr("disabled", "disabled");
		$(".again_pass").attr("disabled", "disabled");
		$(".input_yan").attr("disabled", "disabled");
		$(".inputph_yan").attr("disabled", "disabled");
		box[0].innerHTML = "*手机号码不是一个有效号码";
		box[0].style.color = "red";
		$(".regist_btn").css({
			"background": "rgb(241,241,241)",
			"color": "rgb(153,153,153)"
		});
	}
});
//验证email
$(".email").on("blur", function() {
	var c = $(".email").val();
	var re = /^\w+@[a-z0-9]+(\.[a-z]{2,3}){1,2}$/g;
	if(re.test(c)) {
		box1[0].innerHTML = "输入正确";
		box1[0].style.color = "green";
		$(".pass1").attr("disabled", false);
		$(".again_pass1").attr("disabled", false);
		$(".input_yan1").attr("disabled", false);
		$(".inputph_yan1").attr("disabled", false);
		$(".regist_btn1").css({
			"background": "rgb(235,26,62)",
			"color": "white"
		});

	} else {
		$(".pass1").attr("disabled", "disabled");
		$(".again_pass1").attr("disabled", "disabled");
		$(".input_yan1").attr("disabled", "disabled");
		$(".inputph_yan1").attr("disabled", "disabled");
		$(".regist_btn1").css({
			"background": "rgb(241,241,241)",
			"color": "rgb(153,153,153)"
		});
		box1[0].innerHTML = "*邮件地址不合法";
		box1[0].style.color = "red";

	}
});
//输入密码
$(".pass").on("blur", function() {
	var c = $(".pass").val();
	var re = /^\w{6,}$/; //密码
	if(re.test(c)) {
		box[1].innerHTML = "输入正确";
		box[1].style.color = "green";

	} else {
		box[1].innerHTML = "*登录密码不能少于 6 个字符。";
		box[1].style.color = "red";

	}
});
//确认密码
$(".again_pass").on("blur", function() {
	if($(".pass").val() == $(".again_pass").val()) {
		box[2].innerHTML = "输入正确";
		box[2].style.color = "green";
	} else {
		box[2].innerHTML = "*两次输入密码不一致。";
		box[2].style.color = "red";
	}
});
//输入密码1
$(".pass1").on("blur", function() {
	var c = $(".pass1").val();
	var re = /^\w{6,}$/; //密码
	if(re.test(c)) {
		box1[1].innerHTML = "输入正确";
		box1[1].style.color = "green";

	} else {
		box1[1].innerHTML = "*登录密码不能少于 6 个字符。";
		box1[1].style.color = "red";
	}
});
//确认密码1
$(".again_pass1").on("blur", function() {
	if($(".pass1").val() == $(".again_pass1").val()) {
		box1[2].innerHTML = "输入正确";
		box1[2].style.color = "green";
	} else {
		box1[2].innerHTML = "*两次输入密码不一致。";
		box1[2].style.color = "red";
	}
});
//验证码
$(".input_yan").on("blur", function() {
	if($(".input_yan").val() == $(".yanzheng").text()) {
		box[3].innerHTML = "输入正确";
		box[3].style.color = "green";
	} else {
		box[3].innerHTML = "*不一致。";
		box[3].style.color = "red";
	}
});
//验证码1
$(".input_yan1").on("blur", function() {
	if($(".input_yan1").val() == $(".yanzheng1").text()) {
		box1[3].innerHTML = "输入正确";
		box1[3].style.color = "green";
	} else {
		box1[3].innerHTML = "*不一致。";
		box1[3].style.color = "red";
	}
});
//用户协议
$(".checkbox").on("click", function() {
	if($(".checkbox").attr("id") == 1) {
		$(".checkbox").attr("id", "2");
	} else {
		$(".checkbox").attr("id", "1");
	}
});
//用户协议1
$(".checkbox1").on("click", function() {
	if($(".checkbox1").attr("id") == 1) {
		$(".checkbox1").attr("id", "2");
	} else {
		$(".checkbox1").attr("id", "1");
	}
});
//注册
$(".regist_btn").on("click", function() {
	if($(".checkbox").attr("id") == 2) {
		//获取验证码不为空
		if(box[1].innerHTML == "输入正确" && box[2].innerHTML == "输入正确" && box[3].innerHTML == "输入正确" && $(".inputph_yan").val() != "") {
		
		var aja=new XMLHttpRequest();
         aja.onreadystatechange=readStat;
         aja.open('post','../php/register.php',true);
         aja.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
         aja.send("username="+$('.phone').val()+"&pwd="+$('.pass').val());
         function readStat() {
         if (aja.readyState==4&&aja.status==200) {
            var result=aja.responseText;
            alert('注册成功');
            window.location.href = "login.html";
          }
        }
		} else {
			alert("注册失败");
			checkCode();
		}
	} else {
		alert("请勾选《用户协议》");
	}
});
//注册1
$(".regist_btn1").on("click", function() {
	if($(".checkbox1").attr("id") == 2) {
		if(box1[1].innerHTML == "输入正确" && box1[2].innerHTML == "输入正确" && box1[3].innerHTML == "输入正确" && $(".inputph_yan").val() != "") {
			$.ajax({
				type: "post",
				url: "../php/register.php",
				data: {
					user: $(".email").val(),
					pass: $(".pass1").val()
				},
				success: function(res) {
					console.log(res);
					alert("注册成功");
					window.location.href = "login.html";
				}
			});
		} else {
			alert("注册失败");
			checkCode1();
		}
	} else {
		alert("请勾选《用户协议》");
	}
});
//写验证码phone
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
checkCode();
$(".yanzheng").on("click", function() {
	checkCode();
});
//写验证码email
var code1;

function checkCode1() {
	code1 = "";
	var codelength = 4; //验证码的长度
	var checkCode = document.querySelector(".yanzheng1");
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
	for(var i = 0; i < codelength; i++) {
		var charNum = Math.floor(Math.random() * 52);
		code1 += codeChars[charNum];
	}
	if(checkCode) {
		checkCode.className = "yanzheng1";
		checkCode.innerHTML = code1;
	}
}
checkCode1();

$(".yanzheng1").on("click", function() {
	checkCode1();
});

