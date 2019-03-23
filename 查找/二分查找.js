/*有序数组查找*/
function binarySearch(arr, n){
  if(arr.length<1){
    return -1;
  }
  var low = 0, high = arr.length - 1;
  var mid = 0;
  while(low<=high){
    mid = Math.floor((low+high)/2);
    if(arr[mid]>n){
      high = mid - 1;
    } else if(arr[mid]<n){
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}