let holder;

let bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      holder = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = holder;
      bubbleSort(arr);
    }
  }
  return arr;
}


module.exports = bubbleSort;
