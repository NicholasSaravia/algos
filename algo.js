const nums = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, -6, 123, 0];

const bubbleSort = (array) => {
  let swap = false;

  do {
    swap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  
  return array;
};

const sorted = bubbleSort(nums);
console.log(sorted);