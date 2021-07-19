const express = require('express')

const fs = require('fs')
const Student = require('./student')

const router = express.Router()

router.get('/students', (req, res) => {
  Student.getStudentsList().then(data => {
    res.render('index.html', {
      students: data 
    })
  })
})

router.get('/students/new', (req, res) => {
  res.render('new.html')

})
router.post('/students/new', (req, res) => {
  fs.readFile('./data/index.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('请求出错')
    } else {
      Student.createStudent(req.body).then(data => {
        if (!data) {
          res.status(200).redirect('/students')
        }
      })
    }
  })
})

router.get('/student/edit', (req, res) => {
  Student.getDetailsById(req.query.id).then(data => {
    res.render('edit.html', {
      student: data
    })
  })
})

router.post('/students/edit', (req, res) => {
  Student.updateDetailsById(req.body).then(data => {
    if (!data) {
      res.redirect('/students')
    }
  })
})

router.get('/students/delete', (req, res) => {

})

module.exports = router