// 二叉树结构
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// 递归序遍历
function traversal(root) {
  // 第一次进入该层
  if (root == null) return

  traversal(root.left) //进入左树下层递归
  // 返回该层，第二次进入

  traversal(root.right) //进入右树下层递归
  // 返回该层，第三次进入
}

// 先序遍历/深度遍历
// 第一次进入时输出
function preOrderTraversal(root) {
  function preOT(root) {
    if (root == null) return
    arr.push(root.val)
    preOT(root.left)
    preOT(root.right)
  }
  let arr = []
  preOT(root)
  return arr
}

// 中序遍历
// 第二次进入时输出
function inOrderTraversal(root) {
  function inOT(root) {
    if (root == null) return
    inOT(root.left)
    arr.push(root.val)
    inOT(root.right)
  }
  let arr = []
  inOT(root)
  return arr
}

// 后序遍历
// 第三次进入时输出
function posOrderTraversal(root) {
  function posOT(root) {
    if (root == null) return
    posOT(root.left)
    posOT(root.right)
    arr.push(root.val)
  }
  let arr = []
  posOT(root)
  return arr
}

// 宽度遍历
function breadthErgodic(root) {
  /* 利用队列，先放入根节点
    每次弹出一个节点就输出
    再放入弹出节点的左右子树，先左后右
    循环
  */
  // 队列
  let queue = []
  queue.push(root)

  let arr = [] //保存结果

  while (queue.length) {
    let cur = queue.shift() //弹出节点
    arr.push(cur.val)

    if (cur.left != null) {
      //压入左节点
      queue.push(cur.left)
    }

    if (cur.right != null) {
      //压入右节点
      queue.push(cur.right)
    }
  }
  return arr
}

module.exports = {
  TreeNode,
  preOrderTraversal,
  inOrderTraversal,
  posOrderTraversal,
}
