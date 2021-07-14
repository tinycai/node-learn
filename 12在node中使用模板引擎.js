var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

const nodeDir = 'E:/study/node'

var fileList = []

// 读取文件目录结构
fs.readdir(nodeDir, (err, data) => {
  if (err) {
    console.log(err)
    return
  } else {
    fileList = data
  }
})

server.on('request', (req, res) => {
  fs.readFile('./lib/filesList.html', (err, data) => {
    if (err) {
      console.log(err)
      return res.end('未能找到文件夹')
    } else {
      const htmlStr = template.render(data.toString(), {
        fileList,
        title: '测试在node中使用模板引擎渲染数据'
      })
      res.end(htmlStr)
    }
  })
})

server.listen(3000, () => {
  console.log('server running http://127.0.0.1:3000/')
  
})