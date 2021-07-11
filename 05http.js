var http = require('http')

// 返回一个server实例
var server = http.createServer()

// 服务器要干嘛？
// 提供服务：对数据的服务
// 发请求
// 接收请求
// 处理请求
// 给个反馈（发送响应）
// 注册request请求事件
// 当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数：回调处理
server.on('request', () => {
  console.log('接收到客户的请求！')
})

server.listen(3000, () => {
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 来访问！')
})