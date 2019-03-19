/*任选一个元素作为“基准”*/
function quickSort(arr, start, end){
	if(start >= end){
		return arr;
	}
	var i = start, j = end;
	var base = arr[i];
	while(i<j){
		while(i<j && arr[j]>=base){
			j--;
		}
		if(i<j){
			arr[i] = arr[j];
			i++;
		}
		while(i<j && arr[i]<base){
			i++;
		}
		if(i<j){
			arr[j] = arr[i];
			j-- 
		}
	}
	arr[i] = base;
	quickSort(arr,start,i-1);
	quickSort(arr,i+1,end);
}

function quickSort(arr){
	if(arr.length<=1){
		return arr;
	}
	var mid = Math.floor(arr.length/2);
	var value = arr.splice(mid,1)[0];
	var left = [];
  var right = [];
	for(var i=0; i<arr.length; i++){
		if(arr[i]<value){
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([value], quickSort(right));
}