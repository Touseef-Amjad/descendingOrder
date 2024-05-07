function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function descSort(arr) {
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] < arr[j]) {
        swap(arr, j - 1, j);
      }
    }
  }
  return arr;
}

const arr = [3, 2, 7, 4, 6, 9];
console.log(descSort(arr));
