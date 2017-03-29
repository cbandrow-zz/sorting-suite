let arr = [1, 5, 4, 3, 2];

const insertSort = (arr) => {

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
insertSort(arr);

module.exports = insertSort;
