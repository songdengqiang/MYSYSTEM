
function dropheavys (arr) {
  // 缓存一个对象
  const hashObject = {}
  // 需要返回的数组
  const data = []
  for (let i = 0; i < arr.length; i++) {
    // 首先判断对象中的key值是否存在传入的这个数组元素，若存在则忽略元素，若不存在，则将元素作为对象的key值，然后赋值为真，最后完成降重：
    if (!hashObject[arr[i]]) {
      data.push(arr[i])
      hashObject[arr[i]] = true
    }
  }
  return data
} // 降重算法

export default {
  // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
  install: function (Vue) {
    Vue.prototype.dropheavy = (arr) => dropheavys(arr)
  }
}
