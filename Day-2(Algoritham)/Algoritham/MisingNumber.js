function missingNumber(arr){
  var n = arr.length+1, 
  sum = 0,
  expectedSum = n* (n+1)/2;
  
  for(var i = 0, len = arr.length; i < len; i++){
    sum += arr[i];
  }
  
  return expectedSum - sum;
}

console.log(missingNumber([5, 8, 10, 9, 4, 2, 6, 1, 3]));
  // = 4