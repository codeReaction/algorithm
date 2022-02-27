//
function quickSort(arr, L = 0, R = arr.length - 1) {
  if (L >= R) return
  // 以最后一位的数为分界点
  // let target = arr[R]

  // 快排改进，目标为随机选择
  let targetIdx = L + Math.floor(Math.random() * (R - L + 1))
  // 将目标放在最后一位
  swap(arr, R, targetIdx)
  let target = arr[R]

  let less = L - 1
  // 最后一位target占位，larger是R，不是R+1
  let larger = R
  for (let i = L; i < larger; i++) {
    if (arr[i] < target) {
      swap(arr, less++ + 1, i)
    }

    if (arr[i] > target) {
      swap(arr, larger-- - 1, i--)
    }
  }
  swap(arr, R, less + 1)

  quickSort(arr, L, less)
  quickSort(arr, larger, R)
  return arr
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let a = [3, 4, 2, 1, 8, 9, 6, 7, 5]
console.log(quickSort(a))

module.exports = {
  quickSort,
}
