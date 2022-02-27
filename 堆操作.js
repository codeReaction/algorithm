// 大根堆
// 某个数在idx位置能否上移
function heapInsert(arr, idx) {
  let fatherIdx = idx == 0 ? 0 : (idx - 1) >> 1
  // 与父位置数比较，若大于，则应向上交换
  while (arr[idx] > arr[fatherIdx]) {
    swap(arr, idx, fatherIdx)
    idx = fatherIdx
    fatherIdx = idx == 0 ? 0 : (idx - 1) >> 1
  }
}

// 某个数在idx位置能否下移
function heapify(arr, idx, heapSize) {
  //需要heapSize来判断有无左右孩子
  let leftIdx = idx << (1 + 1) //左孩子
  while (leftIdx < heapSize) {
    // 先左右孩子比较大小
    let largestIdx =
      leftIdx + 1 < heapSize && arr[leftIdx + 1] > arr[leftIdx]
        ? leftIdx + 1
        : leftIdx

    // 再父与大子比较
    largestIdx = arr[idx] > arr[largestIdx] ? idx : largestIdx

    if (largestIdx == idx) {
      break
    }
    swap(arr, largestIdx, idx)
    idx = largestIdx
    leftIdx = idx << (1 + 1)
  }
}

// 堆排序
function heapSort(arr) {
  if (arr == null || arr.length == 1) return
  // 先处理成大根堆
  for (let i = 0; i < arr.length; i++) { //O(N)
    heapInsert(arr, i) //O(log(N))
  }
  // 单独处理成大根堆，也可以从子节点向上依次进行heapify，时间复杂度为O(N)
  // for(let i = arr.length-1;i>=0;i--){
  //   heapify(arr,i,arr.length)
  // }


  // 堆顶为最大的数，放到最后
  let heapSize = arr.length
  swap(arr,0,--heapSize)
  
  while(heapSize>0){ //O(N)
    heapify(arr,0,heapSize) // 被换到顶的数，需要进行下移 O(log(N))
    swap(arr,0,--heapSize)  //下移完成，顶又是最大的数，放到最后 O(1)
  }
}

function swap(arr, a, b) {
  let t = arr[a]
  arr[a] = arr[b]
  arr[b] = t
}

module.exports = {
  heapInsert,
  heapSort,
  heapify,
}
