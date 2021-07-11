// 浏览器中的 JavaScript 是没有文件操作能力的
// 但是 Node 中的 JavaScript 具有文件操作的能力
// fs 是 file-system 的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心操作
// 在 fs 这个核心模块中，就提供了所有的文件操作相关的Api
// 例如：fs.readFile 就是用来读取文件的

// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs')

// 2. 读取文件
// 		第一个参数是要读取文件的路径
//    第二个参数是一个回调函数
//    	成功
//				data 数据
//				error null
//			失败
//				data	null
//				error	错误对象
fs.readFile('./data/hello.txt', (err, data) => {
	if (err) {
		console.log('文件读取失败！')
	} else {
		// 文件存储的其实都是二进制数据 0 1
		// 二进制转为16进制
		// 但是无论是二进制还是16进制，人类都不认识
		// 所以可以通过 toString 方法把准尉我们能认识的字符
		// <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 0d 0a e4 bd a0 e5 a5 bd ef bc 8c 6e 6f 64 65 2e 6a 73 0d 0a>
		

		// console.log(data)
		console.log(data.toString())
	}
})