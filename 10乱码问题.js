var http = require('http')

var server = http.createServer()

server.on('request', (req, res) =>{
  // 在服务端默认发送的数据，其实就是utf8 编码内容
  // 但是浏览器不知道你是 utf8 编码的内容
  // 浏览器在不知道服务器响应内容的编码情况下会按照当前系统的默认编码去解析
  // 中文操作系统默认是 gbk
  // 解决方法就是正确的告诉浏览器我给你发送的内容是什么编码的
  // 在 http 协议中，Content-Type 就是用来告诉对方我给你发送的数据内容是什么类型
  if (req.url === '/plain') {
    res.setHeader('Content-type', 'text/plain;charset=utf-8')
    res.end('hello 世界')
  } else if (req.url === '/html') {
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    res.end('<h3>hahhaha</h3>')
  }
})

server.listen(3000, () => {
  console.log('服务已开启，http://127.0.0.1:3000/')
})
