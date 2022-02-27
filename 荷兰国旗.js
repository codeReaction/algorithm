function HollandFlag(arr, bound) {
  let less = -1
  let larger = arr.length

  for (let i = 0; i < larger; i++) {
    // i小于右边界而不是数组长度
    if (arr[i] < bound) {
      swap(arr, less++ + 1, i)
    }
    if (arr[i] == bound) {
    }
    if (arr[i] > bound) {
      swap(arr, larger-- - 1, i--)
    }
  }

  return arr
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

module.exports = {
  HollandFlag,
}
