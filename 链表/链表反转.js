//链表无头结点
function reverseList(pHead){
	if(pHead === null){
		return null;
	}
	var pre = null, next = null;
	while(pHead!==null){
		next = pHead.next;
		pHead.next = pre;
		pre = pHead;
		pHead = next;
	}
	return pre;
}