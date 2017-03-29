export const mergeSort = (arr) =>{
  if (arr.length === 1) {
    return arr
  }
  let divide = arr.length / 2
  let arr1 = arr.slice(0, divide);
  let arr2 = arr.slice(divide, arr.length);

  return mergeArrays(mergeSort(arr1), mergeSort(arr2));
}

export const mergeArrays = (arr1, arr2) =>{
  let mergedArr = []

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      mergedArr.push(arr1.shift())
    } else {
      mergedArr.push(arr2.shift())
    }
  }
  while (arr1.length) {
    mergedArr.push(arr1.shift())
  }
  while (arr2.length) {
    mergedArr.push(arr2.shift())
  }
  return mergedArr;
}
