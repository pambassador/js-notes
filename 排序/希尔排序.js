/*插入排序的改进版，使数组中任意间隔d的元素都是有序的*/
function shellSort(arr){
	var d = Math.floor(arr.length/2);
	for(d; d>0;d=Math.floor(d/2)){
		for(var i=0; i<arr.length;i++){
			for(var j=i;j>0 && arr[j]<arr[j-d];j=j-d){
				[arr[j], arr[j-d]] = [arr[j-d], arr[j]];
			}
		}
	}
	return arr;
}