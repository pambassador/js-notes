
function render() {
    var data = BDVIDEO.videos;
    var ret = '<ul class="res">';
    data.forEach((item)=>{
    	ret+=`<li class="movie">
        <a class="link" href=${item.url} target="_blank">
    	<img src=${item.imgh_url} class="img">
    	<span class="title">${item.title}</span>
    	<span class="subtitle">${item.sub_title}</span>
    	</a></li>`
    });
    ret += '</ul>';
    $('#main').html(ret);
}
window.onload = render();

//实现点击轮播
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
    if(wrap.style.left==="-2400px"){
        newLeft =-0;
    } else {
        newLeft = parseInt(wrap.style.left)-1200;
    }
    wrap.style.left = newLeft + "px";
    index++;
    if(index>2){
        index=0;
    }
}
function prev_pic(){
    var newLeft;
    if(wrap.style.left === "0px"){
        newLeft = -2400;
    } else {
        newLeft = parseInt(wrap.style.left)+1200;
    }
    wrap.style.left = newLeft + "px";
    index--;
    if(index<0){
        index=2;
    }
}