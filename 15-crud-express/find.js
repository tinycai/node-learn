// 实现 find
const arr = [
  {
    id: 1,
    name: '张三',
    age: 12
  },
  {
    id: 2,
    name: '李四',
    age: 14
  },
  {
    id: 3,
    name: '王五',
    age: 17
  }
]

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i]
    }
  }
} 

const callback = function(item) {
  return item['id'] === 2
}

const result = arr.myFind(callback)

console.log(result)
