/*将序列中所有元素两两比较，将最大的放在最后面。*/
function bubbleSort(arr){
	for(var i=0; i<arr.length;i++){
		for(var j=1; j<arr.length-i;j++){
			if(arr[j]<arr[j-1]){
				[arr[j], arr[j-1]] = [arr[j-1], arr[j]];
			}
		}
	}
	return arr;
}