/*给出元素在页面中相对于视口的位置*/
function getBoundingClientRect(element) {
	var scrollTop = document.documentElement.scrollTop;
	var scrollLeft = document.documentElement.scrollLLeft;
	if(element.getBoundingClientRect) {
		if(typeof arguments.callee.offset != "number") {
			var temp = document.createElement("div");
			temp.style.cssText = "position:absolute;left:0;top:0;";
			document.body.appendChild(temp);
			arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
			document.body.removeChild(temp);
			temp = null;
		}
		var rect = element.getBoundingClientRect();
		var offset = arguments.callee.offset;
		return {
			left : rect.left + offset,
			right : rect.right + offset,
			top : rect.top + offset,
			bottom : rect.bottom + offset
		};
	} else {
		var actualLeft = getElementLeft(element); //偏移量.js里定义的函数
		var actualTop = getElementop(element);    //偏移量.js里定义的函数
		return {
			left : actualLeft - scrollLeft,
			right : actualLeft + element.offsetWidth - scrollLeft,
			top : actualTop - scrollTop,
			bottom : actualTop + element.offsetHeight - scrollTop
			
		}
	}
}