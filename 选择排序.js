function selectionSort(arr) {
  for (let start = 0; start < arr.length - 1; start++) {
    let minIdx = start
    for (let i = start + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIdx]) minIdx = i
    }
    let temp = arr[start]
    arr[start] = arr[minIdx]
    arr[minIdx] = temp
    // 异或交换时，自身与自身异或为0，需要排除
    // if (start == minIdx) continue
    // arr[start] = arr[start] ^ arr[minIdx]
    // arr[minIdx] = arr[start] ^ arr[minIdx]
    // arr[start] = arr[start] ^ arr[minIdx]
  }
  return arr
}

module.exports = {
  selectionSort,
}
