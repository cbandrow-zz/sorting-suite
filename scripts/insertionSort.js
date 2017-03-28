
let sorted = []
let insertSort = (arr) => {
  if (!arr.length) {
    return sorted
  }
  if (!sorted.length) {
    sorted = [arr.shift()];
  }
  let container = arr.shift()

  for (let j = sorted.length; j >= 0; j--) {
    if (container > sorted[ j - 1 ] && container !== undefined) {
      sorted.splice(j, 0, container)
      insertSort(arr);
      return sorted
    }
  }
  sorted.splice(0, 0, container);
  insertSort(arr);
  return sorted;
}

let nums = [8, 16, 15, 42, 23, 4]

insertSort(nums);


module.exports = insertSort;
