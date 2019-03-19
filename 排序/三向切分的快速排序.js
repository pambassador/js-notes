function quick3way(arr,start,end){
	if(start>=end){
		return arr;
	}
	var lt = start, i = start + 1, gt = end;
	var base = arr[start];
	while(i<=gt){
		if(arr[i] < base){
			[arr[i], arr[lt]] = [arr[lt], arr[i]];
			i++;
			lt++;
		} else if(arr[i] > base){
			[arr[i], arr[gt]] = [arr[gt], arr[i]];
			gt--;
		} else {
			i++;
		}
	}
	quick3way(arr,start,lt-1);
	quick3way(arr,gt+1,end);
}