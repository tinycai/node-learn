// 对 students 数据操作的封装

const fs = require('fs')
const dbPath = './data/index.json'

// 获取学生数据
class Student {
  // 获取学生数据
  getStudentsList() {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(data)['students'])
        }
      })
    })
  }

  // 新增学生数据
  createStudent(tip) {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          const list = JSON.parse(data)['students']
          tip['id'] = list.length + 1
          const concatArr = JSON.stringify({ students: [tip, ...list] })
          fs.writeFile(dbPath, concatArr, (err, data) => {
            if (err) {
              reject(err)
            } else {
              resolve(null)
            }
          })
        }
      })

    })
  }

  // 根据 id 获取数据
  getDetailsById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          const list = JSON.parse(data)['students']
          const details = list.find(item => { return item.id === Number(id) })
          resolve(details)
        }
      })
    })
  }

  // 根据 id 更新数据
  updateDetailsById(input) {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          const list = JSON.parse(data)['students']
          input['id'] = Number(input['id'])
          
          list.map((item, index) => {
            if (item.id === input['id']) {
              Object.assign(item, input)
            }
          })
          fs.writeFile(dbPath, JSON.stringify({ students: list}), (err, data) => {
            if (err) {
              reject(err)
            } else {
              resolve(null)
            }
          })
        }
      })
    })
  }

  // 删除学生
  deleteById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, (err, data) => {
        if (err) {
          reject (err)
        } else {
          const list = JSON.parse(data)['students']
          const filterList = list.filter(item => item.id !== id)
          const strList = JSON.stringify({students: filterList})
          fs.writeFile(dbPath, strList, (err, data) => {
            if (err) {
              reject(err)
            } else {
              resolve(null)
            }
          })
        }
      })
    })
  }
}

module.exports = new Student()