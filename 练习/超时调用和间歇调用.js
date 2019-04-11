var num = 0;
var max = 10;
var intervalId = null;

function incrementNumber() {
    num++;
    if (num === max) {
        clearInterval(incrementNumber, 500);
        alert("Done");
    }
}
var interevalId = setInterval(incrementNumber, 500);

/*用超时调用模拟间歇调用*/
var num = 0;
var max = 10;
function incrementNumber(){
	num++;
	if(num < max){
		setTimeout(incrementNumber, 500);
	} else {
		alert('Done');
	}
}
setTimeout(incrementNumber, 500);