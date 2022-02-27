// 分割
function partition(arr) {
  let length = arr.length
  if (length == 1) return arr
  let mid = length >> 1
  let LA = arr.slice(0, mid)
  let RA = arr.slice(mid)
  return [LA, RA]
}
// 归并
function merge(arr1, arr2) {
  let p1 = (p2 = pt = 0)
  let temp = []
  while (p1 < arr1.length && p2 < arr2.length) {
    temp[pt++] = arr1[p1] < arr2[p2] ? arr1[p1++] : arr2[p2++]
  }
  while (p1 < arr1.length) {
    temp[pt++] = arr1[p1++]
  }
  while (p2 < arr2.length) {
    temp[pt++] = arr2[p2++]
  }
  return temp
}
// 归并排序
function mergeSort(arr) {
  let PA = partition(arr)
  if (PA.length == 1) return arr
  let arr1 = mergeSort(PA[0])
  let arr2 = mergeSort(PA[1])
  let res = merge(arr1, arr2)
  return res
}

module.exports = {
  partition,
  merge,
  mergeSort,
}
