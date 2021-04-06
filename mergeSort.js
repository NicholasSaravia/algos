// recursion method
function mergeSort(array, callback) {
  // we do not need to continue the 
  if (array.length == 1) return array;

  const middle = Math.floor(array.length / 2);
  
  let left = array.slice(0, middle);
  let right = array.slice(middle);


  return callback(mergeSort(left, callback), mergeSort(right, callback));
}

// merge arrays together
function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // once one has been sorted the other should be tagged on to the end;
  while(leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      merged.push(left[leftIndex]);
      leftIndex++;
    }else{
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...merged, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

console.log(mergeSort([1, 44, 6, 23, 68, -1, 3, 4343, 545, 134, 84, 7, 5], merge));


///////////////////////////////////////////////////////////////////////////////

function merge2(left, right){
  let merged = [];

  while (left.length && right.length){
     if (left[0] < right[0]) {
       merged.push(left.shift());
     } else {
       merged.push(right.shift());
     }
  }
 
  return [...merged, ...left, ...right];

}


console.log(mergeSort([1, 44, 6, 23, 68, -1, 3, 4343, 545, 134, 84, 7, 5], merge2));
