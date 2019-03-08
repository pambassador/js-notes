/*求某元素的偏移量，将这个元素的offsetLeft和offsetTop
与其offsetParent的相同属性相加，如此循环直至根元素*/
function getElementLeft(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;
	while(current!==null){
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	return actualLeft;
}

function getElementTop(element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while(current!==null) {
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
}
