//超时调用
var timeoutId = setTimeout(function() {
	alert("Hello world");
}, 1000);
//注意：在执行前可用clearTimeout取消
clearTimeout(timeoutId);

//间歇调用
var num = 0;
var max = 10;
var intervalId = null;
function incrementNumber() {
	num++;
	//如果执行次数达到了max设定的值，则取消后续尚未执行的调用
	if(num == max) {
		clearInterval(intervalId);
		alert("done");
	}
}
intervalId = setInterval(incrementNumber, 500);

//也可以用超时调用实现上面的模式
var num = 0;
var max = 10;
function incrementNumber() {
	num++;
	//如果执行次数未达到max设定的值，则设置另一次超时调用
	if(num < max) {
		setTimeout(incrementNumber, 500);
	} else {
		alert("done");
	}
}
setTimeout(incrementNumber, 500);