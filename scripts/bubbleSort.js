let holder;

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        holder = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = holder;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
