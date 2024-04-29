
/**
 * 顺序数组中找到指定数字出现的次数
 * 头尾双指针行动
 * 1. 头尾同时找到元素，直接位置相减return
 * 2. 其中一边找到元素，开始计数
 */
function freequncy(arr, n) {
  let count = 0;
  const len = arr.length - 1;
  for (let i = 0, j = len; i < len; i++, j--) {
    const n1 = arr[i];
    const n2 = arr[j];
    if (n1 == n) {
      count++;
      if (arr[i + 1] != n) break;
    }
    if (n2 == n) {
      count++;
      if (arr[j - 1] != n) break;
    }
    if (n1 == n && n2 == n) {
      count = j - i + 1;
      break
    }
  }
  return count;
}
freequncy([1, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7], 5)
