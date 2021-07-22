var mongoose = require('mongoose')
const { Schema } = mongoose
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    default: new Date()
  }
})

const User = mongoose.model('User', userSchema)

// const tom = new User({ name: 'Tom', age: 12 })
// const jack = new User({ name: 'Jack', age: 13})

// // 保存数据
// tom.save((err, ret) => {
//   if (err) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功', ret)
//   }
// })

// jack.save((err, res) => {
//   if (err) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功', res)
//   }
// })

// 查询数据 - 查询所有
// User.find((err, res) => {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log('查询成功', res)
//   }
// })

// 查询数据 - 按条件查询所有
// User.find({ name: 'Jack'}, (err, res) => {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log('查询成功', res)
//   }
// })

// 查询数据 - 查询单个数据
// User.findOne((err, res) => {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log('查询成功', res)
//   }
// })

// 删除数据 - 删除单个数据
// User.remove((err, res) => {
//   if (err) {
//     console.log('删除失败')
//   } else {
//     console.log('删除成功', res)
//   }
// })

// 删除数据 - 删除一个
// User.deleteOne({
//   name: 'Tom'
// }, (err, res) => {
//   if (err) {
//     console.log('删除失败')
//   } else {
//     console.log('删除成功', res)
//   }
// })

// 删除数据 - 删除多个
// User.deleteMany({
//   _id: '60f9361c127bec800dcb5b3b'
// }, (err, res) => {
//   if (err) {
//     console.log('删除失败')
//   } else {
//     console.log('删除成功', res)
//   }
// })

// 更新数据
User.findOneAndUpdate({ _id: '60f93c228be717f47184eac5'}, { name: 'Daming'}, (err, res) => {
  if (err) {
    console.log('更新失败')
  } else {
    console.log('更新成功', res)
  }
})