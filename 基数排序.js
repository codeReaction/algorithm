function radixSort(arr, L = 0, R = arr.length - 1, digit = maxbit(arr)) {
  let radix = 10 //10为基底
  let bucket = Array(R + 1).fill(0)
  for (let d = 1; d <= digit; d++) {
    //有几位数，就要进出桶几次
    let count = Array(radix).fill(0) //用0填充数组，JS空数组默认值为undefined
    // 词频统计
    for (let i = L; i <= R; i++) {
      let j = getDigit(arr[i], d) //取出每个数的第d位数字
      count[j]++
    }
    // 改成累计分布
    for (let i = 1; i < radix; i++) {
      count[i] = count[i] + count[i - 1]
    }
    // 从右往左确定arr中元素出桶的位置
    for (let i = R; i >= L; i--) {
      let j = getDigit(arr[i], d)
      let idx = count[j] - 1
      bucket[idx] = arr[i]
      count[j]--
    }
    // 复制回arr
    arr.splice(L, R + 1, ...bucket)
  }
}

// 计算待排数组中最大数的位数
function maxbit(arr) {
  let max = Math.max(...arr)
  let res = 0
  while (max != 0) {
    res++
    max = ~~(max / 10)
  }
  return res
}

// 获取数字的指定位
function getDigit(num, d) {
  let numArr = num.toString().split('')
  return parseInt(numArr[numArr.length - d]) || 0 //高位补0
}

module.exports = {
  radixSort,
}

let arr = [4, 31, 2]
radixSort(arr)
console.log(arr)
