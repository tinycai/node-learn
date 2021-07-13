var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', (req, res) =>{
  if (req.url === '/html') {
    fs.readFile('./lib/index.html', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text-plain;charset=utf-8')
        res.end('读取文件出错')
      } else {
        res.setHeader('Content-Type','text/html;chartset:utf-8')
        res.end(data)
      }
    })
  } else if (req.url === '/jpg') {
    fs.readFile('./lib/test.jpg', (err,data) => {
      if (err) {
        res.setHeader('Content-Type','text/plain;chartset:utf-8')
        res.end('请求图片失败！')
      } else {
        res.setHeader('Content-Type','image/jpeg')
        res.end(data)
      }
    })
  }
})

server.listen(3000, () => {
  console.log('服务已开启，http://127.0.0.1:3000/');
})