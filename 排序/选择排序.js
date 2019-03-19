/*不断的选择剩余元素中的最小者*/
function selectSort(arr){
	for(var i=0; i<arr.length; i++){
		var min = i;
		for(var j=i+1; j<arr.length;j++){
			if(arr[j]<arr[min]){
				min = j;
			}
		}
		[arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
}