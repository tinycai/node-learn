const fs = require('fs')

/**
 * fs.writeFile 三个参数
 * 写入文件的路径
 * 写入的内容
 * 回调函数（err/当文件名中含有特殊字符时，会写入失败，并且会报错）
 */
fs.writeFile('./data/write.txt', '通过node写入的内容', err => {
  if(err) {
    console.log(err)
  } else {
    console.log('写入成功！')
    
  }
})