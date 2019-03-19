/*待排序序列分为若干个有序的子序列，再把有序的子序列合并为整体有序序列*/
function mergeSort(arr){
  if(arr.length<=1){
    return arr;
  }
	var mid = Math.floor(arr.length/2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, arr.length);
	return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
	var il = 0, ir = 0;
	var result = [];
	while(il<left.length && ir<right.length){
		if(left[il]<right[ir]){
			result.push(left[il]);
			il++;
		} else {
			result.push(right[ir]);
			ir++
		}
	}
	while(il<left.length){
		result.push(left[il]);
		il++;
	}
	while(ir<right.length){
		result.push(right[ir]);
		ir++;
	}
	return result;
}