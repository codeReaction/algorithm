function smallSum(arr) {
  let [, res] = _smallSum(arr)
  return res
}
function _smallSum(arr) {
  let PA = partition(arr)
  if (PA.length == 1) return [arr, 0]
  let [arr1, res1] = _smallSum(PA[0])
  let [arr2, res2] = _smallSum(PA[1])
  let [mArr, mRes] = merge(arr1, arr2)
  return [mArr, res1 + res2 + mRes]
}

function partition(arr) {
  let length = arr.length
  if (length == 1) return arr
  let mid = length >> 1
  let LA = arr.slice(0, mid)
  let RA = arr.slice(mid)
  return [LA, RA]
}
// 归并 并 求小和
function merge(arr1, arr2) {
  let p1 = (p2 = pt = 0)
  let res = 0
  let temp = []
  while (p1 < arr1.length && p2 < arr2.length) {
    // 若左侧比右侧小，则左侧的数是右侧的数及右侧向右所有数的小和
    res += arr1[p1] < arr2[p2] ? arr1[p1] * (arr2.length - p2) : 0

    temp[pt++] = arr1[p1] < arr2[p2] ? arr1[p1++] : arr2[p2++]
  }
  while (p1 < arr1.length) {
    temp[pt++] = arr1[p1++]
  }
  while (p2 < arr2.length) {
    temp[pt++] = arr2[p2++]
  }
  return [temp, res]
}

module.exports = {
  smallSum,
}
