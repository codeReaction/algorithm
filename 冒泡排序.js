function bubbleSort(arr) {
  for (let idx = arr.length - 1; idx > -1; idx--) {
    for (let i = 0; i < idx; i++) {
      let j = i + 1
      if (arr[i] > arr[j]) {
        arr[i] = arr[i] ^ arr[j]
        arr[j] = arr[i] ^ arr[j]
        arr[i] = arr[i] ^ arr[j]
      }
    }
  }
  return arr
}

module.exports = {
  bubbleSort,
}
