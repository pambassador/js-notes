var wrap = document.querySelector(".wrap");
var next = document.querySelector(".right-arrow");
var prev = document.querySelector(".left-arrow");
var index = 0;
next.onclick = function(){
	next_pic();
}
prev.onclick = function(){
	prev_pic();
}
function next_pic(){
	var newLeft;
	if(wrap.style.left==="-1460px"){
		newLeft =-0;
	} else {
		newLeft = parseInt(wrap.style.left)-730;
	}
	wrap.style.left = newLeft + "px";
	index++;
	if(index>2){
		index=0;
	}
	showCurrentDot();
}
function prev_pic(){
	var newLeft;
	if(wrap.style.left === "0px"){
		newLeft = -1460;
	} else {
		newLeft = parseInt(wrap.style.left)+730;
	}
	wrap.style.left = newLeft + "px";
	index--;
	if(index<0){
		index=2;
	}
	showCurrentDot();
}
var timwe = null;
function autoPlay(){
	timer = setInterval(function(){
		next_pic();
	}, 1000);
}
autoPlay();
var container = document.querySelector(".container");
container.onmouseenter = function(){
	clearInterval(timer);
}
container.onmouseleave = function(){
	autoPlay();
}


var dots = document.getElementsByTagName("span");
function showCurrentDot(){
	for(var i=0,len=dots.length;i<len;i++){
		dots[i].className="";
	}
	dots[index].className = "on"
}
showCurrentDot();

for(var i=0,len=dots.length;i<len;i++){
	(function(i){
		dots[i].onclick = function(){
			var dis = index-i;
			if(index == 2 && parseInt(wrap.style.left)!==-2190){
				dis = dis - 3;
			}
			if(index == 0 && parseInt(wrap.style.left)!==0){
				dis = dis + 3;
			}
			// wrap.style.left = (parseInt(wrap.style.left) + dis*730) + "px";
			wrap.style.left = -i*730 + "px";
			index = i;
			showCurrentDot();
		}
	})(i);
}