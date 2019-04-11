//交换两个节点
function swap(A,i,j){
	let temp = A[i];
	A[i] = A[j];
	A[j] = temp;
}
/*将i结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
假设结点i以下的子堆已经是一个大顶堆，shiftDown函数实现的功能实际上是：
找到结点i在包括节点i的堆中的正确位置。后面将写一个for循环，从第一个非叶子结点开始，
对每个非叶子结点都执行shiftDown操作，所以就满足了结点i以下的堆已经是一大顶堆*/
function shiftDown(A,i,length){
	let temp = A[i];   //当前父节点
	for(let j=2*i+1;j<length;j=2*j+1){
		temp = A[i];
		if(j+1<length && A[j]<A[j+1]){
			j++;
		}
		if(temp<A[j]){
			swap(A,i,j)
			i=j;
		}else{
			break;
		}
	}
}

//堆排序
function heapSort(A){
	//初始化大顶堆，从第一个非叶子结点开始
	for(let i=Math.floor(A.length/2-1); i>=0; i--){
		shiftDown(A,i,A.length);
	}
	//排序，每一次for循环中找出一个当前最大值，数组长度减一
	for(let i=Math.floor(A.length-1);i>0;i--){
		swap(A,0,i);
		shiftDown(A,0,i);
	}
}
