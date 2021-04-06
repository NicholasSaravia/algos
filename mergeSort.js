// recursion method
function mergeSort(array) {
  // we do not need to continue the 
  if (array.length === 1) return array;

  const middle = Math.floor(array.length / 2);
  
  let left = array.slice(0, middle);
  let right = array.slice(middle);


  return merge(mergeSort(left), mergeSort(right));
}

// merge arrays together
function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

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

console.log(mergeSort([1, 44, 6, 23, 68, -1, 3, 4343, 545, 134, 84, 7, 5]));
