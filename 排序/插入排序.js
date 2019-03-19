/*将无序序列插入到有序序列中*/
function insertSort(arr){
	for(var i=1; i<arr.length; i++){
		for(j=i;j>0 && arr[j]<arr[j-1];j--){
			[arr[j], arr[j-1]] = [arr[j-1], arr[j]];
		}
	}
  return arr;
}