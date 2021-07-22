const express = require('express')

const fs = require('fs')
const Student = require('./student')

const router = express.Router()

router.get('/students', (req, res) => {
  Student.find((err, data) => {
    if (err) {
      console.log('读取数据失败')
    } else {
      res.render('index.html', {
        students: data 
      })
    }
  })
})

router.get('/students/new', (req, res) => {
  res.render('new.html')

})

router.post('/students/new', (req, res) => {
  new Student(req.body).save((err, data) => {
    if (err) {
      console.log('新增失败')
    } else {
      res.status(200).redirect('/students')
    }
  })
  // fs.readFile('./data/index.json', 'utf8', (err, data) => {
  //   if (err) {
  //     res.status(500).send('请求出错')
  //   } else {
  //     Student.createStudent(req.body).then(data => {
  //       if (!data) {
  //         res.status(200).redirect('/students')
  //       }
  //     })
  //   }
  // })
})

router.get('/student/edit', (req, res) => {
  // Student.getDetailsById(req.query.id).then(data => {
  //   res.render('edit.html', {
  //     student: data
  //   })
  // })
  Student.findOne({ _id: req.query.id.replace(/"/g, '') }, (err, data) => {
    if (err) {
      console.log('查询失败')
    } else {
      res.render('edit.html', {
        student: data
      })
    }
  })
})

router.post('/students/edit', (req, res) => {
  // Student.updateDetailsById(req.body).then(data => {
  //   if (!data) {
  //     res.redirect('/students')
  //   }
  // })
  Student.updateOne({_id: req.body['id'].replace(/"/g, '')}, req.body, (err, data) => {
    if (err) {
      console.log('更新失败')
    } else {
      res.redirect('/students')
    }
  })
})

router.get('/student/delete', (req, res) => {
  // Student.deleteById(Number(req.query.id)).then(data => {
  //   if(!data) {
  //     res.redirect('/students')
  //   }
  // })
  Student.deleteOne({_id: req.query.id.replace(/"/g, '') } ,(err, data) => {
    if (err) {
      console.log(err)
      console.log('删除失败')
    } else {
      res.redirect('/students')
    }
  })
})


module.exports = router