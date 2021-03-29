function selectionSort(array) {
  let lengthOfArray = array.length;

  for (let i = 0; i < lengthOfArray; i++) {
    // set smallest number in array
    let smallestNumIndex = i;

    // start another loop entire array starting at position of smallest num index + 1
    for (let j = i + 1; j < lengthOfArray; j++) {
      if (array[j] < array[smallestNumIndex]) {
        // update smallest num index
        smallestNumIndex = j;
      }
    }

    // check if smallest number changed based of index
    if (smallestNumIndex != i) {
      // swap places
      let tmp = array[i];
      array[i] = array[smallestNumIndex];
      array[smallestNumIndex] = tmp;
    }
  }
  return array;
}

console.log(selectionSort(Array.from(Array(100)).map(x=>Math.floor(Math.random() * 100))));
