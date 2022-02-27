function insertSort(arr) {
  for (let next = 1; next < arr.length; next++) {
    for (let max = next - 1; max >= 0, arr[max] > arr[max + 1]; max--) {
      swap(arr, max, max + 1)
    }
  }
  return arr
}

function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}

module.exports = {
  insertSort,
}
